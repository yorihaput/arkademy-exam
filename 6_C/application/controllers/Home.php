<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class home extends CI_Controller {
  public function __construct() 
  {
	parent::__construct();
  	$this->load->database();
  	$this->load->model(array('m_home'));
  }

  public function index()
  {
    $data['home'] = $this->m_home->selectAll();
        for ($i=0; $i <count($data['home']) ; $i++) { 
            $data['home'][$i]['no'] = $i+1;
            $data['home'][$i]['aksi'] = '<button type="button" data-id="'.$data['home'][$i]['id'].'" data-toggle="modal" data-target="#tabel-modal" class="btn t-c-green t-w-1 b-action-tr edit">Edit</button> | <button type="button" data-id="'.$data['home'][$i]['id'].'" class="btn t-c-primary t-w-1 b-action-tr hapus">Delete</button>';
        }
    $this->load->view('home', $data);
  }

  public function detail()
  {
    $data['kamar'] = $this->m_kamar->selectAll();
    $respon['data'] = $data['kamar'];
    echo json_encode($respon);
  }
  public function store()
  {
    $action=$this->input->post('action');
    $this->m_kamar->storeData($action);
  }
}
?>