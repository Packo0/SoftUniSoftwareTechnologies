<form>
    <div>First Number:</div>
    <input type="number" name="num1" />
    <div>Second Number:</div>
    <input type="number" name="num2" />
    <div><input type="submit" /></div>
</form>

<?php 
    if(isset($_GET['num1']) && isset($_GET['num2'])) {
        $a = intval($_GET['num1']);
        $b = intval($_GET['num2']);
        $result = $a + $b;
        echo "$a + $b = $result";
    }
?>