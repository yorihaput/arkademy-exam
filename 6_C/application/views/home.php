<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Soal 6.C</title>

    <!-- CSS FILE -->
    <link rel="stylesheet" type="text/css" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/sweetalert2/dist/sweetalert2.all.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/select2/dist/css/select2.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/ui.css">

    <script type="text/javascript" src="./assets/jquery/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="./assets/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script type="text/javascript" src="./assets/select2/dist/js/select2.full.min.js"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="./assets/logo.png">
                </a>
                <span class="navbar-brand t-c-primary">ARKADEMY <span class="t-c-black t-w-bold">COFFEE SHOP</span></span>
               
            </div>
            <div class="pull-right">
                <button type="button" data-toggle="modal" data-target='#tabel-modal' class="add btn btn-primary btn-shadow btn-aku">ADD</button>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- Content here -->
                <center>
                    <table id="table-data" class="table-ku display">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Cashier</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php if(count($home) > 0){
                            for ($i=0; $i <= count($home)-1; $i++) { ?>
                            <tr>
                                <td class="t-a-center t-w-bold"><?php echo $home[$i]['no'];?></td>
                                <td><?php echo $home[$i]['cashier'];?></td>
                                <td><?php echo $home[$i]['name'];?></td>
                                <td><?php echo $home[$i]['category'];?></td>
                                <td><?php echo money_ind($home[$i]['price']);?></td>
                                <td><?php echo $home[$i]['aksi'];?></td>
                                </tr>
                        <?php }
                            }else{ ?>
                            <tr align="center">
                                <td colspan="6" style="height: 20px;line-height:20px;">Tidak ada data</td>
                            </tr>
                        <?php } ?>
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    </div>


    <div class="modal fade" id="tabel-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form id="tabel-form" data-toogle="validator" class="tambah form-horizontal" action="#" role="form" method="post" data-id="" >
                <div class="modal-header">
                    <h4 class="modal-title"><strong>Input</strong></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <select name="cashier" id="cashier" class="form-control" placeholder="Cashier">
                                            <option value="1" selected>Pevita Pearce</option>
                                            <option value="2">Raisa Andriana</option>
                                        </select>  
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input id="name" name="name" type="text"class="form-control" value="Ice Tea" placeholder="Product Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <select name="category" id="category" class="form-control" placeholder="Category">
                                            <option value="1">Food</option>
                                            <option value="2" selected>Drink</option>
                                        </select>  
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input id="price" name="price" type="number"class="form-control" value="10000" placeholder="Product Name">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
                <div class="modal-footer">
                  <center>
                        <button data-id="0" type="submit"  name="save" class="btn btn-primary btn-aku save-form">SAVE</button>
                  </center>
                </div>
                </form>
              </div>
            </div>
          </div>
          



    <script type="text/javascript" src="./assets/index.js"></script>
</body>
</html>