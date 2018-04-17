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
            $third = $first + $second;
            $sum = 0;

            echo $second . " ";
            echo $third . " ";
            for ($i = 2; $i < $num; $i++) {
                $sum = $first + $second + $third;
                echo $sum . " ";
                $first = $second;
                $second = $third;
                $third = $sum;
            }
        }
    ?>
</body>
</html>