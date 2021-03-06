const YoutubeVideoDownloaderService = require("../Services/YoutubeVideoDowloaderService");
const CaptionDowloaderService = require("../Services/CaptionDowloaderService");
const ConvertXmlToSrt = require("../Services/ConvertXmlToSrt");

module.exports = {
    async dowloadVideoAndCaptions(req, res) {
        const { youtube_video_url, path_to_video, path_to_captions } = req.body;

        const videoDownload = await YoutubeVideoDownloaderService.downloadVideoFromYoutube(youtube_video_url);
        const captionXmlDownload = await CaptionDowloaderService.downloadCaptionsFromYoutube(youtube_video_url);
        // const captionXmlConvertedToSrt = await ConvertXmlToSrt.ConvertXmlToSrt(captionXmlDownload);

        return res.json({ message: "Ok" }).status(200);
    }
}