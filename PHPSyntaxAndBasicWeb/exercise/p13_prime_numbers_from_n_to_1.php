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
        function isPrime(int $number) : bool
        {
            for ($i = 2; $i <= sqrt($number); $i++) {
                if($number % $i == 0) {
                    return false;
                }
            }

            return true;
        }

        if(isset($_GET['num'])) {
            $num = intval($_GET['num']);
            
            for($i = $num; $i >= 2; $i--) {
                if(isPrime($i)) {
                    echo $i . " ";
                }
            }
        } 
    ?>
</body>
</html>