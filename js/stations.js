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
{ "name" : "Damen (Pink Line)" , "number" : "40210"},
{ "name" : "Damen (Blue Line-O'Hare Branch)" , "number" : "40590"},
{ "name" : "Davis" , "number" : "40050"},
{ "name" : "Dempster" , "number" : "40690"},
{ "name" : "Dempster-Skokie" , "number" : "40140"},
{ "name" : "Diversey" , "number" : "40530"},
{ "name" : "Division" , "number" : "40320"},
{ "name" : "Cottage Grove" , "number" : "40720"},
{ "name" : "Forest Park" , "number" : "40390"},
{ "name" : "Foster" , "number" : "40520"},
{ "name" : "Francisco" , "number" : "40870"},
{ "name" : "Fullerton" , "number" : "41220"},
{ "name" : "Garfield (Green Line)" , "number" : "40510"},
{ "name" : "Garfield (Red Line)" , "number" : "41170"},
{ "name" : "Grand (Blue Line)" , "number" : "40490"},
{ "name" : "Grand (Red Line)" , "number" : "40330"},
{ "name" : "Granville" , "number" : "40760"},
{ "name" : "Halsted (Green Line)" , "number" : "40940"},
{ "name" : "Halsted (Orange Line)" , "number" : "41130"},
{ "name" : "Harlem (Blue Line-Forest Park Branch)" , "number" : "40980"},
{ "name" : "Harlem (Green Line)" , "number" : "40020"},
{ "name" : "Harlem (Blue Line-O'Hare Branch)" , "number" : "40750"},
{ "name" : "Harold Washington Library-State/Van Buren" , "number" : "40850"},
{ "name" : "Harrison" , "number" : "41490"},
{ "name" : "Howard" , "number" : "40900"},
{ "name" : "Illinois Medical District" , "number" : "40810"},
{ "name" : "Indiana" , "number" : "40300"},
{ "name" : "Irving Park (Blue Line)" , "number" : "40550"},
{ "name" : "Irving Park (Brown Line)" , "number" : "41460"},
{ "name" : "Jackson (Blue Line)" , "number" : "40070"},
{ "name" : "Jackson (Red Line)" , "number" : "40560"},
{ "name" : "Jarvis" , "number" : "41190"},
{ "name" : "Jefferson Park" , "number" : "41280"},
{ "name" : "Kedzie (Brown Line)" , "number" : "41180"},
{ "name" : "Kedzie (Pink Line)" , "number" : "41040"},
{ "name" : "Kedzie (Green Line)" , "number" : "41070"},
{ "name" : "Kedzie-Homan (Blue Line)" , "number" : "40250"},
{ "name" : "Kedzie (Orange Line)" , "number" : "41150"},
{ "name" : "Kimball" , "number" : "41290"},
{ "name" : "King Drive" , "number" : "41140"},
{ "name" : "Kostner" , "number" : "40600"},
{ "name" : "Lake" , "number" : "41660"},
{ "name" : "Laramie" , "number" : "40700"},
{ "name" : "LaSalle" , "number" : "41340"},
{ "name" : "LaSalle/Van Buren" , "number" : "40160"},
{ "name" : "Lawrence" , "number" : "40770"},
{ "name" : "Linden" , "number" : "41050"},
{ "name" : "Logan Square" , "number" : "41020"},
{ "name" : "Loyola" , "number" : "41300"},
{ "name" : "Main" , "number" : "40270"},
{ "name" : "Midway" , "number" : "40930"},
{ "name" : "Monroe (Blue Line)" , "number" : "40790"},
{ "name" : "Monroe (Red Line)" , "number" : "41090"},
{ "name" : "Montrose (Blue Line)" , "number" : "41330"},
{ "name" : "Montrose (Brown Line)" , "number" : "41500"},
{ "name" : "Morgan" , "number" : "41510"},
{ "name" : "Morse" , "number" : "40100"},
{ "name" : "North/Clybourn" , "number" : "40650"},
{ "name" : "Noyes" , "number" : "40400"},
{ "name" : "Oak Park (Blue Line)" , "number" : "40180"},
{ "name" : "Oak Park (Green Line)" , "number" : "41350"},
{ "name" : "Oakton-Skokie" , "number" : "41680"},
{ "name" : "O'Hare" , "number" : "40890"},
{ "name" : "Paulina" , "number" : "41310"},
{ "name" : "Polk" , "number" : "41030"},
{ "name" : "Pulaski (Pink Line)" , "number" : "40150"},
{ "name" : "Pulaski (Blue Line-Forest Park Branch)" , "number" : "40920"},
{ "name" : "Pulaski (Green Line)" , "number" : "40030"},
{ "name" : "Pulaski (Orange Line)" , "number" : "40960"},
{ "name" : "Quincy/Wells" , "number" : "40040"},
{ "name" : "Racine" , "number" : "40470"},
{ "name" : "Ridgeland" , "number" : "40610"},
{ "name" : "Rockwell" , "number" : "41010"},
{ "name" : "Roosevelt" , "number" : "41400"},
{ "name" : "Rosemont" , "number" : "40820"},
{ "name" : "Sedgwick" , "number" : "40800"},
{ "name" : "Sheridan" , "number" : "40080"},
{ "name" : "South Boulevard" , "number" : "40840"},
{ "name" : "Southport" , "number" : "40360"},
{ "name" : "Sox-35th" , "number" : "40190"},
{ "name" : "State/Lake" , "number" : "40260"},
{ "name" : "Thorndale" , "number" : "40880"},
{ "name" : "UIC-Halsted" , "number" : "40350"},
{ "name" : "Washington/Wabash" , "number" : "41700"},
{ "name" : "Washington/Wells" , "number" : "40730"},
{ "name" : "Washington (Blue Line)" , "number" : "40370"},
{ "name" : "Wellington" , "number" : "41210"},
{ "name" : "Western (Brown Line)" , "number" : "41480"},
{ "name" : "Western (Pink Line)" , "number" : "40740"},
{ "name" : "Western (Blue Line-Forest Park Branch)" , "number" : "40220"},
{ "name" : "Western (Blue Line-O'Hare Branch)" , "number" : "40670"},
{ "name" : "Western (Orange Line)" , "number" : "40310"},
{ "name" : "Wilson" , "number" : "40540"},
];


// https://www.transitchicago.com/developers/ttdocs/#_Toc296199909