import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TermsCondition from '../pages/TermsAndConditions';
import Privacy from '../pages/PrivacyPolicy';
import CancellationPolicy from "../pages/CancellationPolicy";
import Support from "../pages/Support";
import BecomePartner from "../pages/BecomePartner";
import PostYourLegalIssue from "../pages/PostYourLegalIssue";
import ChatWithLawyers from "../pages/ChatWithLawyers";
import AboutLegalCompany from "../pages/AboutLegalCompany";
import HireALawyer from "../pages/HireALawyer";
import ForCorporate from "../pages/ForCorporate";
import ForUsers from "../pages/ForUsers";
import ForLawFirms from "../pages/ForLawFirms";
import ForLawyers from "../pages/ForLawyers";
import BusinessPortal from "../pages/BusinessPortal";
import HireMultipleLawyers from "../pages/HireMultipleLawyers";
import LawFirm from "../pages/LawFirm";
import BusinessAndCorporateLaw from "../pages/BusinessAndCorporateLaw";
import LegalConsultation from "../pages/LegalConsultation";
import Services from "../pages/Services";
import ContractServices from "../pages/ContractServices";
import PropertyAndRealEstateLaw from "../pages/PropertyAndRealEstateLaw";
import FamilyAndPersonalMatters from "../pages/FamilyAndPersonalMatters";
import ImmigrationAndVisaLaw from "../pages/ImmigrationAndVisaLaw";
import DisputeResolution from "../pages/DisputeResolution";
import IntellectualProperty from "../pages/IntellectualProperty";
import StartupAndBusinessSetup from "../pages/StartupAndBusinessSetup";

const AppRouter = () => {
    const basePath = process.env.REACT_APP_BASE_PATH;

    return (
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/post-your-legal-issue" element={<PostYourLegalIssue />} />
          <Route path="/chat-with-lawyers" element={<ChatWithLawyers />} />
          <Route path="/about-legal-company" element={<AboutLegalCompany />} />
          <Route path="/hire-a-lawyer" element={<HireALawyer />} />
          <Route path="/for-corporate" element={<ForCorporate />} />
          <Route path="/for-users" element={<ForUsers />} />
          <Route path="/for-law-firms" element={<ForLawFirms />} />
          <Route path="/for-lawyers" element={<ForLawyers />} />
          <Route path="/business-portal" element={<BusinessPortal />} />
          <Route path="/hire-multiple-lawyers" element={<HireMultipleLawyers />} />
          <Route path="/law-firm" element={<LawFirm />} />
          <Route path="/business-corporate-law" element={<BusinessAndCorporateLaw />} />
          <Route path="/legal-consultation" element={<LegalConsultation />} />
          <Route path="/contract-services" element={<ContractServices />} />
          <Route path="/property-real-estate-law" element={<PropertyAndRealEstateLaw />} />
          <Route path="/family-personal-matters" element={<FamilyAndPersonalMatters />} />
          <Route path="/immigration-visa-law" element={<ImmigrationAndVisaLaw />} />
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/startup-business-setup" element={<StartupAndBusinessSetup />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
