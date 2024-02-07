<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="css/app.css" rel="stylesheet">
    <link href="datatables.min.css" rel="stylesheet">
    <script src="datatables.min.js"></script>
</head>

<body>
    @include('components.navbar')
    @yield('container')
    @include('components.footer')
    

    <script>
        $(document).ready(function() {
            $('#dataTable').DataTable();

        });
    </script>    
</body>

</html>