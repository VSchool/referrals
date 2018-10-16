const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
    return res.redirect("/lime")
})

app.get("/lime", (req, res) => {
    const referralCodes = ["RHRFEVD", "R6ULI52", "R626LIU", "RHHKHVN", "RTRUVYP"]
    const randCode = referralCodes[Math.floor(Math.random() * referralCodes.length)]
    const url = `https://lime.bike/referral/${randCode}`
    return res.redirect(url)
})

app.get("/bird", (req, res) => {
    const referralUrls = [
        "https://gift.bird.co/OhyJTb3J2Q",
        "https://gift.bird.co/hSYNk23I2Q",
        "https://gift.bird.co/wI2QrsWI2Q",
        "https://gift.bird.co/4xmRiTJz4Q"
    ]
    const randUrl = referralUrls[Math.floor(Math.random() * referralUrls.length)]
    return res.redirect(randUrl)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});