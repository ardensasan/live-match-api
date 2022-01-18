import axios from "axios";
import { LIVE_MATCHES } from "./common/string";

export const getLiveMatches = () =>{
 const result = axios.get(LIVE_MATCHES);
 return result;
}