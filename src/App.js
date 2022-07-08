// import * as React from "react";
import react, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
// import { LatestJob } from "./components/LatestJob";
import { Navbar } from "./components/Navbar";
// import { Search } from "./components/Search";
// import { Update } from "./components/Update";
import { Routes, Route, } from "react-router-dom";
import { Home } from "./Home";
import { Results } from "./components/menu/Results";
import { LatestJob } from "./components/menu/LatestJob";
import { AdmitCard } from "./components/menu/AdmitCard";
import { UniversityUpdate } from "./components/menu/UniversityUpdate";
import { Syllabus } from "./components/menu/Syllabus";
import { Addmission } from "./components/menu/Addmission";
import { Scholarship } from "./components/menu/Scholarship";
import { LatestUpdate } from "./components/menu/LatestUpdate";
import { SarkariYojana } from "./components/menu/SarkariYojana";
import { AllIndiaJob } from "./components/menu/AllIndiaJob";
import { NavyAgniveer } from "./components/updater/NavyAgniveer";
import { SSCMTSTeirI } from "./components/updater/SSCMTSTeirI";
import { ArmyAgniveer } from "./components/updater/ArmyAgniveer";
import { UPTGT2022 } from "./components/updater/UPTGT2022";
import { UPPGT2022 } from "./components/updater/UPPGT2022";
import { UPSSSCPET2022 } from "./components/updater/UPSSSCPET2022";
import { AirForceAgniveer } from "./components/updater/AirForceAgniveer";
import { IBPSClerkXII } from "./components/updater/IBPSClerkXII";
import { OnlineTicket } from "./components/menu/OnlineTicket";
import { Form } from "./components/Form";
import { BiharPacsMemberOnlineApply2022 } from "./components/menu/LatestUpdate/BiharPacsMemberOnlineApply2022";
import { BsebOlympiadOnlineApply2022 } from "./components/menu/LatestUpdate/BsebOlympiadOnlineApply2022";
import { Footer } from "./components/Footer";
import { BiharDELEDadmission2022_24 } from "./components/menu/LatestUpdate/BiharDELEDadmission2022_24";
import { CSCidREGISTRATION2022 } from "./components/updater/CSCidREGISTRATION2022";
import { BIHARINTERADMISSIONFORM2022ONLINEAPPLY } from "./components/updater/BIHARINTERADMISSIONFORM2022ONLINEAPPLY";
import { Aadhar_Card_Se_UPI_Registration_kare } from "./components/updater/Aadhar_Card_Se_UPI_Registration_kare";
import { DelhiPoliceConstableDriverOnlineForm2022 } from "./components/menu/LatestUpdate/DelhiPoliceConstableDriverOnlineForm2022";
import { LNMUUGAdmission2022 } from "./components/menu/LatestUpdate/LNMUUGAdmission2022";
import { InterNSPCutoffList2022_BiharBoardNSPCutoffList2022 } from "./components/menu/LatestUpdate/InterNSPCutoffList2022_BiharBoardNSPCutoffList2022";
import { PmKisanPhysicalVerificationStart } from "./components/menu/LatestUpdate/PmKisanPhysicalVerificationStart";
import { E_ShramkanewportalLunch } from "./components/menu/LatestUpdate/E_ShramkanewportalLunch";
import { PatliputraUniversityPart3AdmitCard2022 } from "./components/menu/LatestUpdate/PatliputraUniversityPart3AdmitCard2022";
import { BiharAnganwadiSahayika_SevikaBahali2022 } from "./components/menu/LatestUpdate/BiharAnganwadiSahayika_SevikaBahali2022";
import { BiharRationDealerBharti2022 } from "./components/menu/LatestUpdate/BiharRationDealerBharti2022";
import { PostofficeRetailIdRegistrationonline } from "./components/menu/LatestUpdate/PostofficeRetailIdRegistrationonline";
import { JansamarthPortalregistration2022 } from "./components/menu/LatestUpdate/JansamarthPortalregistration2022";
import { AadharAuthenticationhistorycheck2022 } from "./components/menu/LatestUpdate/AadharAuthenticationhistorycheck2022 ";
import { BiharRationCardRejectedList2022 } from "./components/menu/LatestUpdate/BiharRationCardRejectedList2022";
import { BiharITIAdmitCard2022 } from "./components/menu/LatestUpdate/BiharITIAdmitCard2022";
import { BiharintegratedBed } from "./components/menu/LatestUpdate/BiharintegratedBed";
import { UPCPPNETOnlineForm2022 } from "./components/fontupdater/UPCPPNETOnlineForm2022";
import { NVSTGTPGTOnlineForm2022 } from "./components/fontupdater/NVSTGTPGTOnlineForm2022";
import { UPITIAdmissionOnlineForm2022 } from "./components/fontupdater/UPITIAdmissionOnlineForm2022";
import { PgcilApprenticeOnlineForm2022 } from "./components/fontupdater/PgcilApprenticeOnlineForm2022";
import { SSCRevisedCalendar2022 } from "./components/fontupdater/SSCRevisedCalendar2022";
import { Bihar2YearBEdAnswerKey2022 } from "./components/fontupdater/Bihar2YearBEdAnswerKey2022";
import { DRDOScientistBOnlineForm2022 } from "./components/fontupdater/DRDOScientistBOnlineForm2022";
import { MukhymantriUPSCScholarshipOnlineForm2022 } from "./components/menu/Scholarship/MukhymantriUPSCScholarshipOnlineForm2022";
import { MungerUniversityUGAdmission2022BABScBComAdmissionProcess2022_25 } from "./components/menu/Scholarship/MungerUniversityUGAdmission2022BABScBComAdmissionProcess2022_25";
import OneSignal from 'react-onesignal';


function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "b06dfcd1-ee84-4a0b-a38f-d85c26028075",    });
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/latestUpdate" element={<LatestUpdate />} />
        <Route exact path="/latestjob" element={<LatestJob />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/admitcard" element={<AdmitCard />} />
        <Route exact path="/universityupdate" element={<UniversityUpdate />} />
        <Route exact path="/sarkariyojna" element={<SarkariYojana />} />
        <Route exact path="/syllabus" element={<Syllabus />} />
        <Route exact path="/addmission" element={<Addmission />} />
        <Route exact path="/scholarship" element={<Scholarship />} />
        <Route exact path="/allindiajob" element={<AllIndiaJob />} />
        <Route exact path="/onlinticket" element={<OnlineTicket />} />
        <Route exact path="/form" element={<Form />} />

        {/* Route : Regular Updater  */}
        <Route exact path="/navyagniveer" element={<NavyAgniveer />} />
        <Route exact path="/sscmtsteiri" element={<SSCMTSTeirI />} />
        <Route exact path="/armyagniveer" element={<ArmyAgniveer />} />
        <Route exact path="/upssscpet2022" element={<UPSSSCPET2022 />} />
        <Route exact path="/uppgt2022" element={<UPPGT2022 />} />
        <Route exact path="/uptgt2022" element={<UPTGT2022 />} />
        <Route exact path="/airforceagniveer" element={<AirForceAgniveer />} />
        <Route exact path="/ibpsclerkxii" element={<IBPSClerkXII />} />

        {/* Route : Latest update  */}
        <Route exact path="/biharpacsonlineapply2022" element={<BiharPacsMemberOnlineApply2022 />} />
        <Route exact path="/BsebOlympiadOnlineApply2022" element={<BsebOlympiadOnlineApply2022 />} />
        <Route exact path="/BiharDELEDadmission2022_24" element={<BiharDELEDadmission2022_24 />} />
        <Route exact path="/CSCidREGISTRATION2022" element={<CSCidREGISTRATION2022 />} />
        <Route exact path="/BIHARINTERADMISSIONFORM2022ONLINEAPPLY" element={<BIHARINTERADMISSIONFORM2022ONLINEAPPLY />} />
        <Route exact path="/DelhiPoliceConstableDriverOnlineForm2022" element={<DelhiPoliceConstableDriverOnlineForm2022 />} />
        <Route exact path="/LNMUUGAdmission2022" element={<LNMUUGAdmission2022 />} />
        <Route exact path="/InterNSPCutoffList2022_BiharBoardNSPCutoffList2022" element={<InterNSPCutoffList2022_BiharBoardNSPCutoffList2022 />} />
        <Route exact path="/PmKisanPhysicalVerificationStart" element={<PmKisanPhysicalVerificationStart />} />
        <Route exact path="/E_ShramkanewportalLunch" element={<E_ShramkanewportalLunch />} />
        <Route exact path="/PatliputraUniversityPart3AdmitCard2022" element={<PatliputraUniversityPart3AdmitCard2022 />} />
        <Route exact path="/BiharAnganwadiSahayika_SevikaBahali2022" element={<BiharAnganwadiSahayika_SevikaBahali2022 />} />
        <Route exact path="/BiharRationDealerBharti2022" element={<BiharRationDealerBharti2022 />} />
        <Route exact path="/PostofficeRetailIdRegistrationonline" element={<PostofficeRetailIdRegistrationonline />} />
        <Route exact path="/JansamarthPortalregistration2022" element={<JansamarthPortalregistration2022 />} />
        <Route exact path="/AadharAuthenticationhistorycheck2022" element={<AadharAuthenticationhistorycheck2022 />} />
        <Route exact path="/BiharRationCardRejectedList2022" element={<BiharRationCardRejectedList2022 />} />
        <Route exact path="/BiharITIAdmitCard2022" element={<BiharITIAdmitCard2022 />} />
        <Route exact path="/BiharintegratedBed" element={<BiharintegratedBed />} />
        {/* <Route exact path="/" element={} /> */}
        {/* <Route exact path="/" element={} /> */}


        {/* Route 3 : FontUpdater */}
        <Route exact path="/upcppnetonlineform2022" element={<UPCPPNETOnlineForm2022 />} />
        <Route exact path="/nvstgtpgtonlineform2022" element={<NVSTGTPGTOnlineForm2022 />} />
        <Route exact path="/upitiadmissiononlineform2022" element={<UPITIAdmissionOnlineForm2022 />} />
        <Route exact path="/PgcilApprenticeOnlineForm2022" element={<PgcilApprenticeOnlineForm2022 />} />
        <Route exact path="/SSCRevisedCalendar2022" element={<SSCRevisedCalendar2022 />} />
        <Route exact path="/Bihar2YearBEdAnswerKey2022" element={<Bihar2YearBEdAnswerKey2022 />} />
        <Route exact path="/DRDOScientistBOnlineForm2022" element={<DRDOScientistBOnlineForm2022 />} />

        {/* Route 4 scholarship */}

        <Route exact path="/mukhymantriUPSCScholarshipOnlineForm2022" element={<MukhymantriUPSCScholarshipOnlineForm2022/>} />
        <Route exact path="/MungerUniversityUGAdmission2022BABScBComAdmissionProcess2022_25" element={<MungerUniversityUGAdmission2022BABScBComAdmissionProcess2022_25/>} />
        {/* <Route exact path="/" element={} /> */}

      </Routes>
    </div>
  );
}
export default App;
