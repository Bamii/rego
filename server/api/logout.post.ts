
export default defineEventHandler(async (req) => {
    deleteCookie(req, "access_token")
    return { ok: true };
});