import React from 'react';
import { Helmet } from 'react-helmet-async';

const JobSEO = ({ job }) => {
    if (!job) return null;

    const jobUrl = `https://www.jobfresh.in/jobs/${job.id}`;
    const jobTitle = job.title;
    const jobDescription = job.fullDescription || job.subtitle;
    const companyName = job.companyInfo?.name || 'Unknown Company';
    const companyLogo = job.companyInfo?.imageUrl;
    const postedDate = job.postedDate;
    const lastDate = job.jobDetails?.lastDate;
    const salary = job.jobDetails?.salary;
    const location = job.location;

    // Create JobPosting structured data
    const jobPostingSchema = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": jobTitle,
        "description": jobDescription,
        "identifier": {
            "@type": "PropertyValue",
            "name": companyName,
            "value": job.id
        },
        "datePosted": postedDate,
        ...(lastDate && { "validThrough": lastDate }),
        "employmentType": job.jobType || "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": companyName,
            ...(companyLogo && { "logo": companyLogo }),
            ...(job.companyInfo?.about && { "description": job.companyInfo.about })
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": location
            }
        },
        ...(salary && {
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                    "@type": "QuantitativeValue",
                    "value": salary,
                    "unitText": "YEAR"
                }
            }
        }),
        ...(job.eligibilityCriteria && {
            "qualifications": job.eligibilityCriteria.join('; ')
        }),
        ...(job.responsibilities && {
            "responsibilities": job.responsibilities.map(r => r.task).join('; ')
        }),
        "url": jobUrl
    };

    return (
        <Helmet>
            {/* Page Title */}
            <title>{`${jobTitle} - ${companyName} | Job Board`}</title>

            {/* Meta Description */}
            <meta
                name="description"
                content={`${jobTitle} at ${companyName}. ${jobDescription.substring(0, 155)}...`}
            />

            {/* Canonical URL */}
            <link rel="canonical" href={jobUrl} />

            {/* Open Graph Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={jobUrl} />
            <meta property="og:title" content={`${jobTitle} - ${companyName}`} />
            <meta property="og:description" content={jobDescription.substring(0, 200)} />
            {companyLogo && <meta property="og:image" content={companyLogo} />}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={jobUrl} />
            <meta name="twitter:title" content={`${jobTitle} - ${companyName}`} />
            <meta name="twitter:description" content={jobDescription.substring(0, 200)} />
            {companyLogo && <meta name="twitter:image" content={companyLogo} />}

            {/* JobPosting Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jobPostingSchema)}
            </script>
        </Helmet>
    );
};

export default JobSEO;
