import { useState } from "react";

import api from "./services/api";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import UrlForm from "./components/UrlForm";
import ReportCard from "./components/ReportCard";

function App() {

  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState(null);

  const [error, setError] = useState("");

  const handleAudit = async () => {

    if (!url.trim()) {

      setError("Please enter a website URL.");

      return;
    }

    setLoading(true);

    setError("");

    setReport(null);

    try {

      const response = await api.post("/audit", {
        url,
      });

      setReport(response.data.data);

    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.error ||
        err.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl p-10">

        <Header />

        <UrlForm
          url={url}
          setUrl={setUrl}
          handleAudit={handleAudit}
          loading={loading}
        />

        {loading && <Loader />}

        {error && (

          <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700 shadow">

            {error}

          </div>

        )}

        <ReportCard report={report} />

        <Footer />

      </div>

    </div>

  );

}

export default App;