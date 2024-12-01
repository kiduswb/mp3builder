// coreRoutes.js

import { Router } from 'express'
import { convertYouTubeLink, cleanupCRON } from '../controllers/mainController.js'

const router = Router()

router.post('/api/convert', convertYouTubeLink)
router.get('/api/cron', cleanupCRON)

router.get('/downloads/:filename', (req, res) => {
    const filename = req.params.filename
    res.download('./downloads/' + filename)
})

export default router