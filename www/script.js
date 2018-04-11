$(
    function() {
        $('button#btAgensi').click(
            function() {
                var dataKirim = $('form#formAgensi').serialize();
                $.get(
                    'https://launchlibrary.net/1.3/agency', dataKirim,
                    function(result) {
                        var data = result;
                        data = data.agencies[0];
                        var teks = "Hasil Teratas<br><br>" +
                            "Singkatan<br>" + data.abbrev + "<br><br>" +
                            "ID<br>" + data.id + "<br><br>" + "Nama<br>" +
                            data.name + "<br><br>" + "Kode Negara<br>" +
                            data.countryCode + "<br>";
                        $('p#pAgensiDat').html(teks);
                    }
                );

            }
        );

        $('button#btLaunchNext').click(
            function() {
                $.get(
                    'https://launchlibrary.net/1.3/launch', { next: 1 },
                    function(result) {
                        var data = result;
                        data = data.launches[0];
                        var teks = "ID<br>" + data.id + "<br><br>" +
                            "Nama Misi Peluncuran<br>" + data.name + "<br><br>" +
                            "Waktu Peluncuran<br>" + data.net + "<br><br>";
                        $('p#pLaunchData').html(teks);
                    }
                );

            }
        );

        $('button#btTempat').click(
            function() {
                var dataKirim = $('form#formTempat').serialize();
                $.get(
                    'https://launchlibrary.net/1.3/location', dataKirim,
                    function(result) {
                        var data = result;
                        data = data.locations[0];
                        var teks = "Hasil Teratas<br><br>" +
                            "ID<br>" + data.id + "<br><br>" + "Nama<br>" +
                            data.name + "<br><br>" + "Kode Negara<br>" +
                            data.countrycode + "<br>";
                        $('p#pTempatDat').html(teks);
                    }
                );

            }
        );

        $('button#btRoket').click(
            function() {
                var dataKirim = $('form#formRoket').serialize();
                var imageURL = 'https://s3.amazonaws.com/launchlibrary/RocketImages/';
                var name, size = '';
                $.get(
                    'https://launchlibrary.net/1.3/rocket', dataKirim,
                    function(result) {
                        var data = result;
                        data = data.rockets[0];
                        size = data.imageSizes[0];
                        name = data.name.split(' ').join('+');
                        var img = imageURL.concat(name, '_', size, '.jpg');
                        var teks = "Hasil Teratas<br><br>" +
                            "ID<br>" + data.id + "<br><br>" + "Nama<br>" +
                            data.name + "<br><br>" + "Konfigurasi<br>" +
                            data.configuration + "<br>";
                        $('p#pRoketDat').html(teks);

                        $("#img").attr(
                            "src", img)

                        $("#img").attr(
                            "hidden", false)
                    }
                );
            }
        );
    });