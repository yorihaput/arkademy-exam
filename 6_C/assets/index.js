function configSelect2(){
    if($.fn.select2){
        $('select').each(function(){
            $(this).select2({
                width: '100%',
                height: '42px',
                placeholder: $(this).data('placeholder') ?  $(this).data('placeholder') : '',
                allowClear: $(this).data('allowclear') ? $(this).data('allowclear') : false,
                minimumInputLength: $(this).data('minimumInputLength') ? $(this).data('minimumInputLength') : -1,
                minimumResultsForSearch: $(this).data('search') ? 1 : -1,
                dropdownCssClass: $(this).data('style') ? 'form-white' : ''
            });
        });
    }
}



$(document).ready(function() {    
    configSelect2();
    //Tombol Tambah
    $(document).on('click', 'button.add', function () {
        var id = $(this).attr('data-id');
        
        $('h4.modal-title strong').text('ADD');

        $('#tabel-form #cashier').val($('#tabel-form #cashier').val()).trigger('change.select2');
        $('#tabel-form #name').val('');
        $('#tabel-form #category').val($('#tabel-form #category').val()).trigger('change.select2');
        $('#tabel-form #price').val('0');
        $('#tabel-form #cashier').focus();
        $('#tabel-form').attr('data-id','');

        $('button.save-form').text('ADD');
        $('#tabel-form').attr('class', 'tambah form-horizontal');    

    });

    $(document).on('submit', '#tabel-form.tambah', function(e){
        e.preventDefault();
            var id = $(this).attr('data-id');
            $.ajax({
            url: page+"/store",
            type: "POST",
            data: $('#tabel-form').serialize()+'&action=tambah',
            success: function(data){          
                swal.fire("Berhasil", "Data berhasil ditambah", "success")
                .then((result) => {
                    if(result.value){
                        location.href = location.href;
                    };
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                swal.fire("Gagal", "Terdapat error yang tidak diketahui atau Koneksi anda terputus dengan server.", "error");            } 
            });
    });

    //Tombol Edit
    $(document).on('click', '#table-data tbody td button.edit', function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: page+"/detail",
            type: "POST",
            data: "id="+id ,
            dataType: "json",
            success: function(data){   
                $('h4.modal-title strong').text('Edit');
                $('button.save-form').text('EDIT');
                $('#tabel-form').attr('class', 'edit form-horizontal');

                $('#tabel-form #cashier').val(data.data.id_cashier).trigger('change.select2');
                $('#tabel-form #name').val(data.data.name);
                $('#tabel-form #category').val(data.data.id_category).trigger('change.select2');
                $('#tabel-form #price').val(data.data.price);
                $('#tabel-form #cashier').focus();
                $('#tabel-form').attr('data-id', id);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error');
                $('#tabel-modal').modal({ show: false });
            } 
        });
    });

    $(document).on('submit', '#tabel-form.edit', function(e){
        e.preventDefault();
            var id = $(this).attr('data-id');
            $.ajax({
            url: page+"/store",
            type: "POST",
            data: $('#tabel-form').serialize()+'&id='+id+'&action=update',
            success: function(data){          
                swal.fire("Berhasil", "Data berhasil diupdate", "success")
                .then((result) => {
                    if(result.value){
                        location.href = location.href;
                    };
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                swal.fire("Gagal", "Terdapat error yang tidak diketahui atau Koneksi anda terputus dengan server.", "error");            } 
            });
    });
    
    //Tombol Hapus
    $(document).on('click', '#table-data tbody td button.hapus', function () {
        var id = $(this).attr('data-id');
        swal.fire({
            title: "Anda Yakin?",
            text: "Yakin ingin hapus data ini",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#319db5",
            cancelButtonColor: "#c75757",
            confirmButtonText: "Hapus",
            cancelButtonText: "Tidak",
            closeOnConfirm: false,
            closeOnCancel: true,
            allowOutsideClick: false
        }).then((result) => {
            if(result.value){
                $.ajax({
                    url: location.href+"/home/store",
                    type: "POST",
                    data: "id="+id+'&action=delete',
                    dataType: "json",
                    success: function(data){          
                        swal.fire({
                            html: "Berhasil Dihapus",
                            title:"Data "+data.cashier+" ID <label class='t-c-primary'>#"+data.id+"</label>",      
                            type: "success",
                            confirmButtonColor: "#319db5",
                            allowOutsideClick: false
                        }).then((result) => {
                            if(result.value){
                                location.href = location.href;
                            };
                        });
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        swal.fire("Gagal", "Terdapat error yang tidak diketahui atau Koneksi anda terputus dengan server.", "error");
                    } 
                });
            }  
        });
    });
});