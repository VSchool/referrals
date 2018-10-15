const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

const referralCodes = ["RHRFEVD", "R6ULI52", "R626LIU", "RHHKHVN"]

app.get("/", (req, res) => {
    return res.redirect("/lime")
})

app.get("/lime", (req, res) => {
    const randCode = referralCodes[Math.floor(Math.random() * referralCodes.length)]
    const url = `https://lime.bike/referral/${randCode}`
    return res.redirect(url)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});