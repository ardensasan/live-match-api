import axios from "axios";

export const getLiveMatches = () => {

}
import { API_KEY } from "../common/string";
export const getTeamLogo = async (gameList: Array<any>) => {
  //   const aw =  gameList.map(async (game) => {
  //       const aw = `https://api.steampowered.com/ISteamRemoteStorage/GetUGCFileDetails/v1/?key=5B94DAD2545FCAA73447EEF18ED8432A&appid=570&ugcid=${game.dire_team.team_logo}`;
  //       const we = await axios.get(aw);
  //     //
  //     // console.log('%c 🍝 data: ', 'font-size:20px;background-color: #FCA650;color:#fff;', data);
  //     return game;
  //   });

  let newGameList = []
//   const posts = gameList.map(async (game) => {
//     if (game.dire_team.team_logo) {

//         return data
//     }else{
//         return game
//     }
//   });
//   console.log('%c 🍉 posts: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', posts);
//   console.log(
//     "%c 🥠 posts: ",
//     "font-size:20px;background-color: #FFDD4D;color:#fff;",
//     posts
//   );
};



export const checkProperty = (property:any) =>{
  try {
    return property
  } catch (error) {
    return undefined
  }
}