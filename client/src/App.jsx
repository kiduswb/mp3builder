import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollWrapper from './helpers/ScrollWrapper'

import Home from './pages/Home'
import Legal from './pages/Legal'
import NotFound from './pages/404'

function App () 
{
  	return (
		<BrowserRouter>
			<ScrollWrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/legal/terms" element={<Legal page={"terms"} />} />
					<Route path="/legal/privacy" element={<Legal page={"privacy"} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</ScrollWrapper>
		</BrowserRouter>
	)
}

export default App
