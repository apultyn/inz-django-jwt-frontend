import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import type { DecodedToken, ReceivedToken } from "./interfaces";

export function decodeToken(): DecodedToken {
    const token = Cookies.get("token");
    if (!token) {
        return { email: "", value: "", exp: 0, iat: 0, groups: [] };
    }
    const decoded = jwtDecode<ReceivedToken>(token);
    console.log(decoded);
    const normalized: DecodedToken = {
        ...decoded,
        groups: decoded.groups,
    };
    console.log("Normalized: ", normalized);
    return normalized;
}

export function getIsAdmin() {
    return decodeToken().groups.includes("book_admin");
}

export function getIsUser() {
    return Cookies.get("token") !== undefined;
}
