<?php
// формируем массив c опытом работы
$job = [
'job_name' => ['GreenLight', 'Tartuga', 'BeeLine'],
'job_data' => ['2021-настоящее время', '2018-2021', '2017-2018'],
'job_desc' => ['Так себе работа, ищу поинтересней', 'Доставка из БК ', 'Подключение интернета и ИП ТВ']
]
?>

<div >
 
<h2 >Опыт работы:</h2>
<div>
<h5><b>
<?php echo $job['job_name'][0]; ?>
</b></h5>
<h6> <?php echo $job['job_data'][0]; ?> </h6>
<p> <?php echo $job['job_desc'][0]; ?> </p>
<hr>
</div>
<div>
<h5><b> <?php echo $job['job_name'][1]; ?> </b></h5>
<h6> <?php echo $job['job_data'][1]; ?> </h6>
<p> <?php echo $job['job_desc'][1]; ?> </p>
<hr>
</div>
<div>
<h5><b> <?php echo $job['job_name'][2]; ?> </b></h5>
<h6> <?php echo $job['job_data'][2]; ?> </h6>
<p> <?php echo $job['job_desc'][2]; ?> </p><br>
</div>
</div>

