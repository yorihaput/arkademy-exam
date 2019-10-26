<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
	if( ! function_exists('getNamaRekening'))
	{
		function getNamaRekening()
		{
            $return="";
            $CI =& get_instance();
            $CI->load->model('m_umum');
            $dataumum = $CI->m_umum->getUmum()->row_array();
            
            $return = $dataumum['atasnamarek'];
			return $return;
		}
    }

    if( ! function_exists('getTypeKost'))
	{
		function getTypeKost()
		{
            $return="";
            $CI =& get_instance();
            $CI->load->model('m_umum');
            $dataumum = $CI->m_umum->getUmum()->row_array();
            
            $return = $dataumum['typekost'];
			return $return;
		}
    }

    if( ! function_exists('getDepAwal'))
	{
		function getDepAwal()
		{
            $return="";
            $CI =& get_instance();
            $CI->load->model('m_umum');
            $dataumum = $CI->m_umum->getUmum()->row_array();
            
            $return = $dataumum['jumlahdepositawal'];
			return $return;
		}
    }

    if( ! function_exists('getMaxID'))
	{
		function getMaxID($table, $idfield)
		{
            $return="";
            $CI =& get_instance();
            $return = $CI->db->select_max($idfield, 'max')->get($table);
            if($return->num_rows() > 0){
                $return = $return->row_array();
                $return = $return['max'];
            }else{
                $return = 0;
            }
			return $return;
		}
    }

    if( ! function_exists('checkIsOut'))
	{
		function checkIsOut($id)
		{
            $return=false;
            $CI =& get_instance();
            $keluar = $CI->db->select('*')->where('idpenyewakeluar', $id)->where('status','2')->get('keluar')->num_rows();
            if($keluar > 0){
              $return = true;
            }else{
                $return = false;
            }
			return $return;
		}
    }

    if( ! function_exists('checkOutExist'))
	{
		function checkOutExist($id)
		{
            $return=false;
            $CI =& get_instance();
            $keluar = $CI->db->select('*')->where('idpenyewakeluar', $id)->where('status!=','0')->get('keluar')->num_rows();
            if($keluar > 0){
              $return = true;
            }else{
                $return = false;
            }
			return $return;
		}
    }

    if( ! function_exists('getKamar'))
	{
		function getKamar($idkamar)
		{
            $return=false;
            $CI =& get_instance();
            $return = $CI->db->select('*')->where('idkamar', $idkamar)->get('v_kamar')->row_array();
            
			return $return;
		}
    }
    if( ! function_exists('checkIsDifferent'))
	{
		function checkIsDifferent($idasal, $idtujuan)
		{
            $return=array(
                'status' => 0,
                'bedaharga' => 0
            );
            $return=false;
            $CI =& get_instance();

            $query = $CI->db->select('*')->where('idkamar',$idasal)->get('v_kamar')->row_array();
            $hargaawal = $query['harga'];
            $query = $CI->db->select('*')->where('idkamar',$idtujuan)->get('v_kamar')->row_array();
            $hargaakhir = $query['harga'];

            if($hargaakhir>$hargaawal){
                $return['status'] = 1;
                $return['bedaharga'] = $hargaakhir-$hargaawal;
            }elseif($hargaakhir==$hargaawal){
                $return['status'] = 0;
                $return['bedaharga'] = 0;
            }elseif($hargaakhir<$hargaawal){
                $return['status'] = -1;
                $return['bedaharga'] = $hargaawal-$hargaakhir;
            }
            
			return $return;
		}
    }

    


?>