<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
	
    <?php 
        if(isset($_GET['num'])) {
            $num = intval($_GET['num']);
            $first = 0;
            $second = 1;
            $sum = 0;

            echo $second . " ";
            for ($i = 1; $i < $num; $i++) {
                $sum = $first + $second;
                echo $sum . " ";
                $first = $second;
                $second = $sum;
            }
        }
    ?>
</body>
</html>