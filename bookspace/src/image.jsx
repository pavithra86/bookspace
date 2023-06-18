import React from "react";
import book1 from "./Asset/pics/book1.png";
import Compilerdesign from "./Asset/pics/Academic/Compilerdesign.jpg";
import Computerarchitecture from "./Asset/pics/Academic/Computerarchitecture.png";
import Computernetwork from "./Asset/pics/Academic/Computernetwork.png";
import Computerprogramming from "./Asset/pics/Academic/Computerprogramming.jpg";
import Datastructure from "./Asset/pics/Academic/Datastructure.jpeg";
import Datawarehouse from "./Asset/pics/Academic/Datawarehouse.jpg";
import Informationtheory from "./Asset/pics/Academic/Informationtheory.jpg";
import Letusc from "./Asset/pics/Academic/Letusc.jpg";
import Mathematicsclass9 from "./Asset/pics/Academic/Mathematicsclass9.jpg";
import Mathematicsclass10 from "./Asset/pics/Academic/Mathematicsclass10.jpg";
import Physicspart1class11 from "./Asset/pics/Academic/Physicspart1class11.jpg";
import Physicspart2class11 from "./Asset/pics/Academic/Physicspart2class11.jpg";
import thecantervilleghost from "./Asset/pics/Academic/thecantervilleghost.jpg";
import Thejavahandbook from "./Asset/pics/Academic/Thejavahandbook.jpg";
import Theoryofcomputation from "./Asset/pics/Academic/Theoryofcomputation.jpg";
import divergent from "./Asset/pics/Fictional/divergent.jpg";
import lifeofpi from "./Asset/pics/Fictional/lifeofpi.jpg";
import muchadoaboutnothing from "./Asset/pics/Fictional/muchadoaboutnothing.jpg";
import theboywhosleptinthesnow from "./Asset/pics/Fictional/theboywhosleptinthesnow.jpg";
import theforgottengarden from "./Asset/pics/Fictional/theforgottengarden.jpg";
import thegirlwhocameback from "./Asset/pics/Fictional/thegirlwhocameback.jpg";
import thelifeboat from "./Asset/pics/Fictional/thelifeboat.jpg";
import themartianstrandedonMarsoneastronautfightstosurvive from "./Asset/pics/Fictional/themartianstrandedonMarsoneastronautfightstosurvive.jpg";
import therevenant from "./Asset/pics/Fictional/therevenant.jpg";
import theshadowofthewind from "./Asset/pics/Fictional/theshadowofthewind.jpg";
import thetrumphofthesun from "./Asset/pics/Fictional/thetrumphofthesun.jpg";
import Thoseinperil from "./Asset/pics/Fictional/Thoseinperil.jpg";
import Treasureisland from "./Asset/pics/Fictional/Treasureisland.jpg";
import underapolestar from "./Asset/pics/Fictional/underapolestar.jpg";
import Apjabdhulkalam from "./Asset/pics/Non_fictional/Apjabdhulkalam.jpg";
import Attentionallshipping from "./Asset/pics/Non_fictional/Attentionallshipping.jpg";
import DKIndianIconsViratKohli from "./Asset/pics/Non_fictional/DKIndianIconsViratKohli.jpg";
import Downunder from "./Asset/pics/Non_fictional/Downunder.jpg";
import Dreamsfrommyfather from "./Asset/pics/Non_fictional/Dreamsfrommyfather.jpg";
import Gobalcallcenters from "./Asset/pics/Non_fictional/Gobalcallcenters.jpg";
import Gold from "./Asset/pics/Non_fictional/Gold.jpg";
import Goldie from "./Asset/pics/Non_fictional/Goldie.jpg";
import Madeinamerica from "./Asset/pics/Non_fictional/Madeinamerica.jpg";
import Shadowsoftheworkhours from "./Asset/pics/Non_fictional/Shadowsoftheworkhours.jpg";
import Swimminglessons from "./Asset/pics/Non_fictional/Swimminglessons.jpg";
import Thediaryofayounggirl from "./Asset/pics/Non_fictional/Thediaryofayounggirl.jpg";
import Theperfectscoreproject from "./Asset/pics/Non_fictional/Theperfectscoreproject.jpg";
 import maximumsecurity from './Asset/pics/Non_fictional/maximumsecurity.jpg'

function Img(props) {
  const { item } = props;
  // console.log("itemsssssssssssss-----",item)
  var items;
  switch (item) {
    case "book1":
      items = book1;
      break;
    case "Compilerdesign":
      items = Compilerdesign;
      break;
    case "Computerarchitecture":
      items = Computerarchitecture;
      break;
    case "Computernetwork":
      items = Computernetwork;
      break;
    case "Computerprogramming":
      items = Computerprogramming;
      break;
    case "Datastructure":
      items = Datastructure;
      break;
    case "Datawarehouse":
      items = Datawarehouse;
      break;
    case "Informationtheory":
      items = Informationtheory;
      break;
    case "Letusc":
      items = Letusc;
      break;
    case "Mathematicsclass9":
      items = Mathematicsclass9;
      break;
      case "":
        items = Mathematicsclass9;
        break;
    case "Mathematicsclass10":
      items = Mathematicsclass10;
      break;
    case "Physicspart1class11":
      items = Physicspart1class11;
      break;
    case "Physicspart2class11":
      items = Physicspart2class11;
      break;
    case "thecantervilleghost":
      items = thecantervilleghost;
      break;
    case "Thejavahandbook":
      items = Thejavahandbook;
      break;
    case "Theoryofcomputation":
      items = Theoryofcomputation;
      break;
    case "divergent":
      items = divergent;
      break;
    case "lifeofpi":
      items = lifeofpi;
      break;
    case "muchadoaboutnothing":
      items = muchadoaboutnothing;
      break;
    case "theboywhosleptinthesnow":
      items = theboywhosleptinthesnow;
      break;
    case "theforgottengarden":
      items = theforgottengarden;
      break;
    case "thegirlwhocameback":
      items = thegirlwhocameback;
      break;
    case "thelifeboat":
      items = thelifeboat;
      break;
    case "themartianstrandedonMarsoneastronautfightstosurvive":
      items = themartianstrandedonMarsoneastronautfightstosurvive;
      break;
    case "therevenant":
      items = therevenant;
      break;
    case "theshadowofthewind":
      items = theshadowofthewind;
      break;
    case "thetrumphofthesun":
      items = thetrumphofthesun;
      break;
    case "Thoseinperil":
      items = Thoseinperil;
      break;
    case "Treasureisland":
      items = Treasureisland;
      break;
    case "underapolestar":
      items = underapolestar;
      break;
    case "Apjabdhulkalam":
      items = Apjabdhulkalam;
      break;
    case "Attentionallshipping":
      items = Attentionallshipping;
      break;
    case "DKIndianIconsViratKohli":
      items = DKIndianIconsViratKohli;
      break;
    case "Downunder":
      items = Downunder;
      break;
    case "Dreamsfrommyfather":
      items = Dreamsfrommyfather;
      break;
    case "Gobalcallcenters":
      items = Gobalcallcenters;
      break;
    case "Gold":
      items = Gold;
      break;
    case "Goldie":
      items = Goldie;
      break;
    case "Madeinamerica":
      items = Madeinamerica;
      break;
    case "Shadowsoftheworkhours":
      items = Shadowsoftheworkhours;
      break;
    case "Swimminglessons":
      items = Swimminglessons;
      break;
    case "Thediaryofayounggirl":
      items = Thediaryofayounggirl;
      break;
    case "Theperfectscoreproject":
      items = Theperfectscoreproject;
      break;
    case "maximumsecurity":
    items=maximumsecurity;
    break;
    default:
      items = "pavii";
      break;
  }
  // console.log(items);
  return <img src={items} alt="not available" width="1000px" />;
}

export default Img;
