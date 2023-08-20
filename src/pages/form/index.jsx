import { Button, CircularProgress, Grid } from '@mui/material';
import { theme } from '../../styles/Theme';
import MainMenu from './components/MainMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import STEP_1_LINKED_IN from './components/form_steps/Step1_LinkedIn';
import STEP_2_BASIC_INFORMATION from './components/form_steps/Step2_BasicInformation';
import STEP_3_CEO_OCEAN_SCORE from './components/form_steps/Step3_CeoOceanScore';
import STEP_4_CEO_ICONOCLAST_SCORE from './components/form_steps/Step4_CeoIconoclastScore';
import STEP_5_CEO_AGREEABLENESS_SCORE from './components/form_steps/Step5_CeoAgreeablenessScore';
import STEP_6_BUSINESS_SECTOR_MODEL from './components/form_steps/Step6_Business_sector_model';
import STEP_7_OPTIONAL_CTO_OVERRIDES from './components/form_steps/Step7_OptionalCtoOverrides';
import STEP_8_OPTIONAL_CEO_OVERRIDES from './components/form_steps/Step8_OptionalCeoOverrides';
import linkedInSVG from '../../assets/NotSelected/Linkedin-GREY.svg';
import linkedInSelectedSVG from '../../assets/Selected/Linkedin-PURPLE.svg';
import linkedInCompletedSVG from '../../assets/Completed/Linkedin-LIGHT PURPLE.svg';
import basicInformationSVG from '../../assets/NotSelected/Basic-Information-GREY.svg';
import basicInformationSelectedSVG from '../../assets/Selected/Basic-Information-PURPLE.svg';
import basicInformationCompletedSVG from '../../assets/Completed/Basic-Information-LIGHT PURPLE.svg';
import ceoOceanScoreSVG from '../../assets/NotSelected/CEO-OCEAN-Score-GREY.svg';
import ceoOceanScoreSelectedSVG from '../../assets/Selected/CEO OCEAN Score-PURPLE.svg';
import ceoOceanScoreCompletedSVG from '../../assets/Completed/CEO OCEAN Score-LIGHT PURPLE.svg';
import ceoIconoclastScoreSVG from '../../assets/NotSelected/CEO-Iconoclast-Score-GREY.svg';
import ceoIconoclastScoreSelectedSVG from '../../assets/Selected/CEO Iconoclast Score-PURPLE.svg';
import ceoIconoclastScoreCompletedSVG from '../../assets/Completed/CEO Iconoclast Score-LIGHT PURPLE.svg';
import ceoAgreeblenessScoreSVG from '../../assets/NotSelected/CEO-Agreeableness-Score-GREY.svg';
import ceoAgreeblenessScoreSelectedSVG from '../../assets/Selected/CEO Agreeableness Score-PURPLE.svg';
import ceoAgreeblenessScoreCompletedSVG from '../../assets/Completed/CEO Agreeableness Score-LIGHT PURPLE.svg';
import sectorBussinesModelSVG from '../../assets/NotSelected/Sector-Business-Model-GREY.svg';
import sectorBussinesModelSelectedSVG from '../../assets/Selected/Sector-Business Model-PURPLE.svg';
import sectorBussinessModelCompletedSVG from '../../assets/Completed/Sector-Business Model-LIGHT PURPLE.svg';
import optionalCTOOverridesSVG from '../../assets/NotSelected/Optional-CTO-Overrides-GREY.svg';
import optionalCTOOverridesSelectedSVG from '../../assets/Selected/Optional CTO Overrides-PURPLE.svg';
import optionalCTOOverridesCompletedSVG from '../../assets/Completed/Optional CTO Overrides-LIGHT PURPLE.svg';
import optionalCEOOverridesSVG from '../../assets/NotSelected/Optional-CEO-Overrides-GREY.svg';
import optionalCEOOverridesSelectedSVG from '../../assets/Selected/Optional CEO Overrides-PURPLE.svg';
import optionalCEOOverridesCompletedSVG from '../../assets/Completed/Optional CEO Overrides-LIGHT PURPLE.svg';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const mainMenuItems = [
  {
    id: 1,
    form_step: 1,
    selected: true,
    step: 'Step 1/8',
    name: 'LinkedIn',
    logo: linkedInSVG,
    logo_selected: linkedInSelectedSVG,
    logo_completed: linkedInCompletedSVG,
  },
  {
    id: 2,
    form_step: 2,
    selected: false,
    step: 'Step 2/8',
    name: 'Basic Information',
    logo: basicInformationSVG,
    logo_selected: basicInformationSelectedSVG,
    logo_completed: basicInformationCompletedSVG,
  },
  {
    id: 3,
    form_step: 3,
    selected: false,
    step: 'Step 3/8',
    name: 'CEO Ocean Score',
    logo: ceoOceanScoreSVG,
    logo_selected: ceoOceanScoreSelectedSVG,
    logo_completed: ceoOceanScoreCompletedSVG,
  },
  {
    id: 4,
    form_step: 4,
    selected: false,
    step: 'Step 4/8',
    name: 'CEO Iconoclast Score',
    logo: ceoIconoclastScoreSVG,
    logo_selected: ceoIconoclastScoreSelectedSVG,
    logo_completed: ceoIconoclastScoreCompletedSVG,
  },
  {
    id: 5,
    form_step: 5,
    selected: false,
    step: 'Step 5/8',
    name: 'CEO Agreebleness Score',
    logo: ceoAgreeblenessScoreSVG,
    logo_selected: ceoAgreeblenessScoreSelectedSVG,
    logo_completed: ceoAgreeblenessScoreCompletedSVG,
  },
  {
    id: 6,
    form_step: 6,
    selected: false,
    step: 'Step 6/8',
    name: 'Sector/ Business Model',
    logo: sectorBussinesModelSVG,
    logo_selected: sectorBussinesModelSelectedSVG,
    logo_completed: sectorBussinessModelCompletedSVG,
  },
  {
    id: 7,
    form_step: 7,
    selected: false,
    step: 'Step 7/8',
    name: 'Optional CTO Overrides',
    logo: optionalCTOOverridesSVG,
    logo_selected: optionalCTOOverridesSelectedSVG,
    logo_completed: optionalCTOOverridesCompletedSVG,
  },
  {
    id: 8,
    form_step: 8,
    selected: false,
    step: 'Step 8/8',
    name: 'Optional CEO Overrides',
    logo: optionalCEOOverridesSVG,
    logo_selected: optionalCEOOverridesSelectedSVG,
    logo_completed: optionalCEOOverridesCompletedSVG,
  },
];

const classes = {
  main_container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '42px',
    padding: '25px 72px 25px 72px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      padding: '15px 20px 15px 20px',
    },
  },
  main_button: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    boxShadow: 'none',
  },
  button_wrapper: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'end',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  step_wrapper: {
    padding: '20px 0px 50px 0px',
    [theme.breakpoints.down('lg')]: {
      padding: '25px 5px 25px 5px',
    },
  },
  back_button: {
    borderRadius: '10px',
    boxShadow: 'none',
    border: '1px solid lightgray',
    color: 'lightgray',
    '&:hover': {
      border: '1px solid lightgray',
    },
  },
};

const UserForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [availableOptions, setAvailableOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formDataLoaded, setFormDataLoaded] = useState(false);
  const navigate = useNavigate();
  // Fill MainMenu with SVGs
  useEffect(() => {
    setAvailableOptions(mainMenuItems);
  }, []);

  // On every load fetch form data
  useEffect(() => {
    fetchInitialFormValues();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (values,buttonType) => {
    setLoading(true);
    console.log('FORM VALUES TO SUBMIT: ', values);
    const client_id = Cookies.get('access_token');
    try {
      const saveFormPromise = axios.post('/api/saveform', {
        clientId: client_id,
        data: values,
      });

      if (buttonType === 'mainButton' && isLastStep) {
        const preSeedScorePromise = axios.post('/api/preSeedScore', {
          clientId: client_id,
          data: values,
        });

        const [saveFormResponse, preSeedScoreResponse] = await Promise.all([
          saveFormPromise,
          preSeedScorePromise,
        ]);

        if (
          saveFormResponse.status === 200 &&
          preSeedScoreResponse.status === 200
        ) {
          const userId = preSeedScoreResponse.data.id;
          console.log(preSeedScoreResponse);
          navigate(`/results/${userId}`);
        } else {
          throw new Error('Failed to save form or calculate preSeedScore');
        }

        formik.resetForm();
      } else {
        const saveFormResponse = await saveFormPromise;

        if (saveFormResponse.status !== 200) {
          throw new Error('Failed to save form');
        }

        setCurrentFormStep((prevStep) => prevStep + 1);
        selectMenuItem(currentFormStep + 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMainButtonClick = async (event) => {
    setLoading(true);
    if ( isLastStep) {
      try {
        await handleSubmit(formik.values,'mainButton');
      } finally {
        setLoading(false);
      }
    } else if (!isLastStep) {
      try {
        await handleSubmit(formik.values,'mainButton');
      } finally {
        
      }
      setCurrentFormStep((prevStep) => prevStep + 1);
      selectMenuItem(currentFormStep + 1);
      setLoading(false);
    }
  };
  

  const fetchInitialFormValues = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/fetch_form', {
        clientId: Cookies.get('access_token'),
      });
      console.log(response.status);
      if (response.status === 200 ) {
        console.log(response)
        const initialFormValues = response.data.formData;
        formik.setValues(initialFormValues);
        setFormDataLoaded(true);
      } 
      else if (response.status==204){
        // First time user, no form data, set the default
        formik.setValues(initialValues);
        setFormDataLoaded(true);
      }
      else {
        throw new Error('Failed to fetch form data');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const selectMenuItem = (itemId) => {
    const updatedMenuItems = availableOptions.map((item) => {
      if (item.id === itemId) {
        setCurrentFormStep(itemId);
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });

    setAvailableOptions(updatedMenuItems);
  };

  const initialValues = {
    ceo_linkedin: '',
    cto_linkedin: '',
    company_name: '',
    company_age: 0,
    pre_seed_size: 0,
    currency: 'GBP',
    founders: 1,
    uk_based: false,
    has_cto: false,
    ocean_o: 0,
    ocean_c: 0,
    ocean_e: 0,
    ocean_a: 0,
    ocean_n: 0,
    diffcountries: false,
    diffindustries: false,
    quirkyhobby: false,
    colloquial: false,
    classtopper: false,
    earlyachieve: false,
    quirkygroup: false,
    smiling: false,
    poscomment: false,
    recgiven: false,
    volunteer: false,
    teamwork: false,
    b2b: false,
    b2c: false,
    saas: false,
    marketplace: false,
    manufacturing: false,
    subscription: false,
    commission: false,
    deeptech: false,
    healthtech: false,
    fintech: false,
    web3: false,
    iot: false,
    lawtech: false,
    biotech: false,
    logistics: false,
    energy: false,
    hardware: false,
    security: false,
    sustainability: false,
    ctoyrsexp: '',
    ctotechroles: '',
    ctosenior: '',
    ctotopcomp: '',
    ctovccomp: '',
    ctoseniorvc: '',
    ctofounder: 0,
    ctotop100: '',
    ctodegree: '',
    ctomba: '',
    ctotechskills: '',
    ceoyrsexp: '',
    ceotechroles: '',
    ceosenior: '',
    ceotopcomp: '',
    ceoseniortop: '',
    ceovccomp: '',
    ceoseniorvc: '',
    ceofounder: 0,
    ceotop100: '',
    ceodegree: '',
    ceomba: '',
    ceophd: '',
    ceoskills: '',
    ceopromotion: '',
  };

  const validationSchema = yup.object().shape({
    ceo_linkedin: yup
      .string()
      .matches(
        /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/$/,
        'Invalid CEO LinkedIn URL format'
      ),
    cto_linkedin: yup
      .string()
      .matches(
        /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/$/,
        'Invalid CTO LinkedIn URL format'
      ),
    company_name: yup.string(),
    company_age: yup.number().min(0).nullable(),
    pre_seed_size: yup.number().min(0, 'Must be a valid number').nullable(),
    currency: yup.string().oneOf(['GBP', 'EUR', 'USD']),
    founders: yup.number().min(1),
    uk_based: yup.boolean(),
    has_cto: yup.boolean(),
    ocean_o: yup.number().min(1),
    ocean_c: yup.number().min(1),
    ocean_e: yup.number().min(1),
    ocean_a: yup.number().min(1),
    ocean_n: yup.number().min(1),
    diffcountries: yup.boolean(),
    diffindustries: yup.boolean(),
    quirkyhobby: yup.boolean(),
    colloquial: yup.boolean(),
    classtopper: yup.boolean(),
    earlyachieve: yup.boolean(),
    quirkygroup: yup.boolean(),
    smiling: yup.boolean(),
    poscomment: yup.boolean(),
    recgiven: yup.boolean(),
    volunteer: yup.boolean(),
    teamwork: yup.boolean(),
    b2b: yup.boolean(),
    b2c: yup.boolean(),
    saas: yup.boolean(),
    marketplace: yup.boolean(),
    manufacturing: yup.boolean(),
    subscription: yup.boolean(),
    commission: yup.boolean(),
    deeptech: yup.boolean(),
    healthtech: yup.boolean(),
    fintech: yup.boolean(),
    web3: yup.boolean(),
    iot: yup.boolean(),
    lawtech: yup.boolean(),
    biotech: yup.boolean(),
    logistics: yup.boolean(),
    energy: yup.boolean(),
    hardware: yup.boolean(),
    security: yup.boolean(),
    sustainability: yup.boolean(),
    ctoyrsexp: yup.string(),
    ctotechroles: yup.string(),
    ctosenior: yup.string(),
    ctotopcomp: yup.string(),
    ctovccomp: yup.string(),
    ctoseniorvc: yup.string(),
    ctofounder: yup.number().min(0).nullable(),
    ctotop100: yup.boolean(),
    ctodegree: yup.boolean(),
    ctomba: yup.boolean(),
    ctotechskills: yup.boolean(),
    ceoyrsexp: yup.string(),
    ceotechroles: yup.string(),
    ceosenior: yup.string(),
    ceotopcomp: yup.string(),
    ceoseniortop: yup.string(),
    ceovccomp: yup.string(),
    ceoseniorvc: yup.string(),
    ceofounder: yup.number(),
    ceotop100: yup.boolean(),
    ceodegree: yup.boolean(),
    ceomba: yup.boolean(),
    ceophd: yup.boolean(),
    ceoskills: yup.boolean(),
    ceopromotion: yup.boolean(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const isLastStep = currentFormStep === mainMenuItems.length;
  const mainButtonText = isLastStep ? 'SUBMIT' : 'NEXT STEP';

  const handleBackButtonClick = async () => {
    setLoading(true);
    try {
      await handleSubmit(formik.values,'backButton');
      setCurrentFormStep((prevStep) => prevStep - 1);
      selectMenuItem(currentFormStep - 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentFormStep) {
      case 1:
        return <STEP_1_LINKED_IN formik={formik} />;
      case 2:
        return <STEP_2_BASIC_INFORMATION formik={formik} />;
      case 3:
        return <STEP_3_CEO_OCEAN_SCORE formik={formik} />;
      case 4:
        return <STEP_4_CEO_ICONOCLAST_SCORE formik={formik} />;
      case 5:
        return <STEP_5_CEO_AGREEABLENESS_SCORE formik={formik} />;
      case 6:
        return <STEP_6_BUSINESS_SECTOR_MODEL formik={formik} />;
      case 7:
        return <STEP_7_OPTIONAL_CTO_OVERRIDES formik={formik} />;
      case 8:
        return <STEP_8_OPTIONAL_CEO_OVERRIDES formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={formik.handleSubmit}
    >
      <Grid container direction='column' sx={classes.main_container}>
        <Grid item>
          <MainMenu
            setCurrentFormStep={setCurrentFormStep}
            selectMenuItem={selectMenuItem}
            availableOptions={availableOptions}
            currentFormStep={currentFormStep}
            handleSubmit={handleSubmit}
            formik={formik}
          />
        </Grid>
        <Grid item>
          {loading && !formDataLoaded ? (
            <CircularProgress />
          ) : (
            <Form onSubmit={formik.handleSubmit}>
              <Grid container direction='column'>
                <Grid item sx={classes.step_wrapper}>
                  {renderStep()}
                </Grid>
                <Grid item sx={classes.button_wrapper}>
                  {currentFormStep > 1 && (
                    <Button
                      name="backButton"
                      variant='outlined'
                      sx={classes.back_button}
                      startIcon={<KeyboardBackspaceIcon />}
                      onClick={handleBackButtonClick}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    name="mainButton"
                    variant='contained'
                    sx={classes.main_button}
                    onClick={handleMainButtonClick}
                  >
                    {mainButtonText}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Grid>
      </Grid>
    </Formik>
  );
};

export default UserForm;
