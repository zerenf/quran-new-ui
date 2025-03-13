import Link from "next/link"

export default function NotFoundPage() {
	return (
		<div className="flex justify-center items-center h-screen text-center">
			<div>
				<h1 className="text-4xl font-bold">404</h1>
				<p className="text-xl">Sayfa Bulunamadı</p>
				<Link href="/">
					<p className="text-blue-500">Ana Sayfaya Dön</p>
				</Link>
			</div>
		</div>
	)
}
