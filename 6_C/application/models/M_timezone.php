<?php
class m_timezone extends CI_Model {
	function __construct()
	{
	    // Call the Model constructor
	    parent::__construct();
	    //Set Time Zone Untuk PHP
	    date_default_timezone_set('Asia/Jakarta');

	    //Set Time Zone Untuk My SQL
	    $now = new DateTime();
		$mins = $now->getOffset() / 60;
		$sgn = ($mins < 0 ? -1 : 1);
		$mins = abs($mins);
		$hrs = floor($mins / 60);
		$mins -= $hrs * 60;
		$offset = sprintf('%+d:%02d', $hrs*$sgn, $mins);

	    $this->db->query("SET time_zone='".$offset."'");
	}
}

?>