import React, { useState, useEffect } from "react";
import JobsListing from "./JobsListing";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchJobs = async () => {
        const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        try {
          const response = await fetch(apiURL);
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.log("Error in Fetching Jobs", error);
        } finally {
          setLoading(false);
        }
      };
      fetchJobs();
    }, 2000);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "Recent Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs?.map((job) => (
              <JobsListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
