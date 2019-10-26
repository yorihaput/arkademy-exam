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
        $('button.save-form').text('ADD');
        $('#form_kamar').attr('class', 'tambah form-horizontal');    

    });

    //Tombol Edit
    $(document).on('click', '#table-data tbody td button.edit', function () {
        var id = $(this).attr('data-id');
        
        $('h4.modal-title strong').text('Edit');
        $('button.save-form').text('EDIT');
        $('#form_kamar').attr('class', 'edit form-horizontal');    

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