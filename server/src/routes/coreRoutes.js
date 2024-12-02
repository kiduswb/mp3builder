// coreRoutes.js

import { Router } from 'express'
import { convertYouTubeLink, cleanupCRON } from '../controllers/mainController.js'

const router = Router()

router.post('/api/convert', convertYouTubeLink)
router.get('/cron/cleanup', cleanupCRON)

export default router