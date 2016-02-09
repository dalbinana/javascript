$(function(){ 
	
	$("form").on('submit', function(e) {
		$(".displayArtists").empty();
		search_artist($(".input-sm").val());
		e.preventDefault();
  });

  $("ul").on('click',".artist", function(e) {
  	$(".displayAlbums").empty();
   	search_album(this.id);
		e.preventDefault();
  });

  $("ul").on('click',".albums", function(e) {

  $(".displayTracks").empty();
  $(".displayAlbums").empty();
  search_track(this.id);
	e.preventDefault();
  });


  function search_album(id) {
  	$.ajax({
		  type: 'GET',
		  url: 'https://api.spotify.com/v1/artists/'+id+'/albums',
		  success: displayAlbums,
		  error: function (error) {
		    console.log('Error!');
		  }
		});
	};

	function search_artist(artista){	
		$.ajax({
	    type: 'GET',
	    url: 'https://api.spotify.com/v1/search?type=artist&query='+artista+'',
	    success: displayBands,
	    error: function (error) {
	    	console.log('Error!');
	    }
	  });
	};

	function search_track(id){	
		$.ajax({
	    type: 'GET',
	    url: 'https://api.spotify.com/v1/albums/'+id+'/tracks',
	    success: displayTracks,
	    error: function (error) {
	    	console.log('Error!');
	    }
	  });
	};

	function displayAlbums(albums){
		
		var array_of_albums=[];
		for (i= 0; i < albums.items.length; i++){
			array_of_albums.push([albums.items[i].images[0].url,albums.items[i].name,albums.items[i].id]);	
		};
		for (i= 0; i < array_of_albums.length; i++){
			$(".displayAlbums").append('<li class="albums" id="'+array_of_albums[i][2]+'"><img class="image" src="'+array_of_albums[i][0]+'" /> <span>'+array_of_albums[i][1]+'</span></li>');
		};

	};

	function displayTracks(albums){
		
		var array_of_tracks=[];
		
		for (i= 0; i < albums.items.length; i++){
			array_of_tracks.push([albums.items[i].name,albums.items[i].preview_url]);	
		};
		for (i= 0; i < array_of_tracks.length; i++){
			$(".displayAlbums").append('<li class="tracks"> <span class="list_tracks">'+array_of_tracks[i][0]+'</span><a href="'+array_of_tracks[i][1]+'" target="_blank"><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-play"></span> Play</button></a>'+'</li>');
// $(".displayAlbums").append('<li class="tracks"> '+array_of_tracks[i][0]+'<span>'+array_of_tracks[i][1]+'</span>'+'</li>');	
		};
		

	};


	

	function displayBands(result){
		var array_of_artists=[];
		
		for (i= 0; i < result.artists.items.length; i++){	
			if (result.artists.items[i].images.length > 0) {
				var artist_name=result.artists.items[i].name;
				var artist_image=result.artists.items[i].images[0].url
				var artist_id=result.artists.items[i].id
				array_of_artists.push([artist_name,artist_image,artist_id]);
			} else
			var artist_name=result.artists.items[i].name;
			array_of_artists.push([artist_name,'http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/092014/spotify_2014_0.png?itok=KdC40xfv'])	
		};
		display(array_of_artists);	
	};

	function display(array_of_artists){
		for (i= 0; i < array_of_artists.length; i++){
		$(".displayArtists").append('<li class="artist" data-toggle="modal" data-target="#myModal" id="'+array_of_artists[i][2]+'"><img class="image" src="'+array_of_artists[i][1]+'" /> <span class="list_artists">'+array_of_artists[i][0]+'</span></li>');
		};

	};







	




}); 
