const router = require("express").Router();

router.post("/", (req, res) => {
  const { posture } = req.body;

  console.log(req.body);
  
  console.log(posture);
  
  if (posture == null) {
    res.status(400).json({
      success: false,
      message: "실패",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "성공",
      inference: "바른자세",
    });
  }
});

module.exports = router;
