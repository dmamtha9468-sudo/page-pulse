function ReportCard({ report }) {

    if (!report) return null;

    return (
        <div className="space-y-6">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="rounded-xl bg-green-50 p-5 shadow">

                    <p className="text-sm text-gray-500">
                        HTTP Status
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-green-700">
                        {report.status}
                    </h2>

                </div>

                <div className="rounded-xl bg-blue-50 p-5 shadow">

                    <p className="text-sm text-gray-500">
                        Response Time
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-blue-700">
                        {report.responseTime} ms
                    </h2>

                </div>

            </div>

            <div className="rounded-xl bg-white p-5 shadow">

                <h3 className="font-semibold text-lg">
                    📄 Page Title
                </h3>

                <p className="mt-2 text-gray-700">
                    {report.title || "Not Found"}
                </p>

            </div>

            <div className="rounded-xl bg-white p-5 shadow">

                <h3 className="font-semibold text-lg">
                    📝 Meta Description
                </h3>

                <p className="mt-2 text-gray-700">
                    {report.metaDescription || "Not Found"}
                </p>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div className="rounded-xl bg-purple-50 p-5 shadow">

                    <p className="text-sm text-gray-500">
                        H1 Count
                    </p>

                    <h2 className="text-3xl font-bold text-purple-700">
                        {report.h1Count}
                    </h2>

                </div>

                <div className="rounded-xl bg-red-50 p-5 shadow">

                    <p className="text-sm text-gray-500">
                        Missing Alt
                    </p>

                    <h2 className="text-3xl font-bold text-red-700">
                        {report.imagesMissingAlt}
                    </h2>

                </div>

                <div className="rounded-xl bg-yellow-50 p-5 shadow">

                    <p className="text-sm text-gray-500">
                        Word Count
                    </p>

                    <h2 className="text-3xl font-bold text-yellow-700">
                        {report.wordCount}
                    </h2>

                </div>

            </div>

        </div>
    );
}

export default ReportCard;