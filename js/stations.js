const stations = [
{ "name" : "18th" , "number" : "40830"},
{ "name" : "35th-Bronzeville-IIT" , "number" : "41120"},
{ "name" : "35th/Archer" , "number" : "40120"},
{ "name" : "43rd" , "number" : "41270"},
{ "name" : "47th (Green Line)" , "number" : "41080"},
{ "name" : "47th (Red Line)" , "number" : "41230"},
{ "name" : "51st" , "number" : "40130"},
{ "name" : "54th/Cermak" , "number" : "40580"},
{ "name" : "63rd" , "number" : "40910"},
{ "name" : "69th" , "number" : "40990"},
{ "name" : "79th" , "number" : "40240"},
{ "name" : "87th" , "number" : "41430"},
{ "name" : "95th" , "number" : "40450"},
{ "name" : "Adams/Wabash" , "number" : "40680"},
{ "name" : "Addison (Blue Line)" , "number" : "41240"},
{ "name" : "Addison (Brown Line)" , "number" : "41440"},
{ "name" : "Addison (Red Line)" , "number" : "41420"},
{ "name" : "Argyle" , "number" : "41200"},
{ "name" : "Armitage" , "number" : "40660"},
{ "name" : "Ashland/63rd" , "number" : "40290"},
{ "name" : "Ashland (Green, Pink Lines)" , "number" : "40170"},
{ "name" : "Ashland (Orange Line)" , "number" : "40830"},
{ "name" : "Austin (Blue Line)" , "number" : "40010"},
{ "name" : "Austin (Green Line)" , "number" : "41260"},
{ "name" : "Belmont (Red, Brown, Purple Lines)" , "number" : "41320"},
{ "name" : "Belmont (Blue Line)" , "number" : "40060"},
{ "name" : "Berwyn" , "number" : "40340"},
{ "name" : "Bryn Mawr" , "number" : "41380"},
{ "name" : "California (Pink Line)" , "number" : "40440"},
{ "name" : "California (Green Line)" , "number" : "41360"},
{ "name" : "California (Blue Line-O'Hare Branch)" , "number" : "40570"},
{ "name" : "Central Park" , "number" : "40780"},
{ "name" : "Central (Green Line)" , "number" : "40280"},
{ "name" : "Central (Purple Line)" , "number" : "41250"},
{ "name" : "Cermak-Chinatown" , "number" : "41000"},
{ "name" : "Cermak-McCormick Place" , "number" : "41690"},
{ "name" : "Chicago (Blue Line)" , "number" : "41410"},
{ "name" : "Chicago (Brown Line)" , "number" : "40710"},
{ "name" : "Chicago (Red Line)" , "number" : "41450"},
{ "name" : "Cicero (Pink Line)" , "number" : "40420"},
{ "name" : "Cicero (Blue Line-Forest Park Branch)" , "number" : "40970"},
{ "name" : "Cicero (Green Line)" , "number" : "40480"},
{ "name" : "Clark/Division" , "number" : "40630"},
{ "name" : "Clark/Lake" , "number" : "40380"},
{ "name" : "Clinton (Blue Line)" , "number" : "40430"},
{ "name" : "Clinton (Green Line)" , "number" : "41160"},
{ "name" : "Conservatory" , "number" : "41670"},
{ "name" : "Cumberland" , "number" : "40230"},
{ "name" : "Damen (Brown Line)" , "number" : "40090"},
  /*  https://www.transitchicago.com/developers/ttdocs/#_Toc296199909  */
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
{ "name" : "STATIONNAME" , "number" : "XXXXXX"},
];