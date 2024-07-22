export const useAvatar = (path: string | undefined) => {
    if(path === "" || path === undefined)
    return "";
    const src = process.env.API?.replace("api", "")! + path;
    return src;
}