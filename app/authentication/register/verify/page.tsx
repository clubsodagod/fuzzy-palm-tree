'use client'
import { AppContainer, SectionWrapper } from '@/app/_components';
import React, { useRef, useEffect, useState } from 'react';
import styles from '../../_components/styles.module.css';
import { useSearchParams, useRouter} from 'next/navigation';
import { apiPath } from '@/library/const';

const VerifyPage = () => {

  // initialize body ref, router, and params object, then initialize query strings
  const router = useRouter();
  const bodyRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const username = params.get('username');
  const token = params.get('token');
  const [expired, setExpired] = useState<boolean|null>(null);
  
  
  const [verified, setVerified] = useState<boolean>(false);
  const [user, setUser] = useState();

  const verificationText = {
    pending:{
      label:"Pending Email Verification",
      excerpt:"Check your email, there's a verification waiting for you.",
    },
    expired: {
      label:"Expired Email Verification",
      excerpt:"Sorry, your verification window has expired. Please feel free to request a new link.",
    },
    verified: {
      label:"Verified Email",
      excerpt: "Let's GO! That was simple. Welcome to the Pearl Box community."
    }
  }



useEffect(() => {
    
        if (token) {
            const handleToken = async () => { // Make an API request to verify the token
                const res = await fetch(`/api/user/verify/email?token=${token}&username=${username}`,{
                  method: "PUT",
                })
                
                const response =  await res.json();

                // validate if email is verified and redirect to login page
                if(response.updatedUser) {

                  if(response.updatedUser.emailVerified) {

                    // gain access to the updated user
                    setUser(response.updatedUser)

                    // set delay to add user experience
                    setTimeout(()=> {
                      setVerified(true)
                    }, 1000);

                    // set delay before redirecting
                    setTimeout(()=> {
                      router.push('/authentication/login')
                    },3500);
                  }
                }
                
            }       
            handleToken()
        }

        if(verified){
        }

        {
          expired && expired
        }

    
}, [token, router, username, verified, expired]);

  return (
    <AppContainer
    ctnRef={bodyRef}>

        <SectionWrapper>

              <h3
              className={`${styles.header} header`}
              >
                  {
                    expired ? verificationText.expired.label 
                    : verified ? verificationText.verified.label : verificationText.pending.label
                  }
              </h3>
              <h6 
              className={`${styles.subheader} subheader`}
              >
                  {
                    expired ? verificationText.expired.excerpt 
                    : verified ? verificationText.verified.excerpt : verificationText.pending.excerpt
                  }
              </h6>

        </SectionWrapper>

    </AppContainer>
  )
}

export default VerifyPage