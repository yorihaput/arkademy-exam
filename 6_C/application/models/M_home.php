<?php
class m_home extends CI_Model{
  function selectAll()
  {
    return $this->db->get('v_query_product_web')->result_array();
	}

  function select($id)
  {
			$this->db->select('*');
      return $this->db->get_where('v_query_product_web', array('id'=>$id))->row();
  }

  function storeData($action)
  {
		$id = $this->input->post('id');
			$id_cashier = $this->input->post('cashier');
			$name = $this->input->post('product');
			$id_category = $this->input->post('category');
			$price = $this->input->post('price');
			$data = array(
				'id_cashier' => $id_cashier,
				'name' => $name,
				'id_category' => $id_category,
				'price'=>$price,
	   	);

   	if ($action=='tambah') {
   		$this->db->insert('product',$data);
   	}elseif($action=='update'){
   		$this->db->where('id',$id)->update('product', $data);
   	}elseif($action=='delete'){
			$query = $this->db->get_where('v_query_product_web', array('id'=>$id))->row_array();
			if(count($data > 0)){
				$delete = $this->db->where('id',$id)->delete('product');
				if($delete){
					$response['error'] = 'FALSE';
					$response['id'] = $query['id'];
					$response['cashier'] = $query['cashier']; 
				}
			}
		}

		return $response;
  }
}