import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PostQuestion({ isOpen, onClose }) {
  const [summary, setSummary] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [fileName, setFileName] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setFileName(f.name);
  };

  return (
    <div className="postq-backdrop">
      <div
        className="postq-modal"
        style={{ fontFamily: "Mukta, system-ui, -apple-system, 'Segoe UI', sans-serif" }}
      >
        <button type="button" className="btn-close postq-close" aria-label="Close" onClick={onClose} />
        <div className="postq-header">
          Post Question
        </div>

        <div className="postq-body">
          {/* Explain Your Question */}
          <div className="mb-3">
            <div className="postq-textarea-wrapper">
              <textarea
                className="form-control postq-textarea"
                placeholder="Explain Your Question"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
          </div>

          {/* Jurisdiction */}
          <div className="mb-3">
            <div className="postq-select-wrap">
              <select
                className="form-select postq-select"
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
              >
                <option value="">Jurisdiction</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="uae">United Arab Emirates</option>
                <option value="india">India</option>
                <option value="canada">Canada</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Attach Document */}
          <div className="row g-3 align-items-center">
            <div className="col-12">
              <label className="postq-attach d-flex align-items-center gap-2">
                <i className="bi bi-paperclip" />
                <span>{fileName || "Attach Document"}</span>
                <input type="file" className="d-none" onChange={handleFileChange} />
              </label>
            </div>
          </div>

          <div className="postq-bottom-section postq-bottom-row mt-4">
            <div className="postq-how mb-3">
              <div className="postq-how-title">How it works</div>
              <ul className="postq-how-list">
                <li>Ask your question and see the answer in Questions & Answers.</li>
                <li>You will be notified when a lawyer answers.</li>
              </ul>
            </div>

            <div className="postq-fee-card postq-fee-wide d-flex align-items-center justify-content-between">
              <div>
                <div className="postq-fee-title">Post Question Fee</div>
                <div className="postq-fee-sub">1 Question post only</div>
              </div>
              <div className="text-end postq-fee-amount-wrap">
                <div className="postq-fee-currency">USD</div>
                <div className="postq-fee-amount">1.00</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button type="button" className="btn btn-dark rounded-pill w-100 postq-submit">
              Post Your Legal Issues
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
