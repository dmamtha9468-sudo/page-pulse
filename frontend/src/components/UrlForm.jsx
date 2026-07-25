function UrlForm({ url, setUrl, handleAudit, loading }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8">

            <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={handleAudit}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
                {loading ? "Analyzing..." : "Analyze Website"}
            </button>

        </div>
    );
}

export default UrlForm;