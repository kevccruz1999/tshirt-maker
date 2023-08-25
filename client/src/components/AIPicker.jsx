import React from 'react';

import CustomButton from './CustomButton';


function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
    return (
        <div className='aipicker-container'>
            <textarea
                className="aipicker-textarea"
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='Ask AI...'
            ></textarea>
            <div className="flex flex-wrap gap-3">
                {generatingImg ?
                    <CustomButton
                        type={'outline'}
                        title={'Asking AI'}
                        customStyles={'text-xs'}
                    /> : (

                        <>
                            <CustomButton
                                title={'AI Logo'}
                                type={'outline'}
                                handleClick={() => handleSubmit('logo')}
                                customStyles={'text-xs'} />

                            <CustomButton
                                title={'AI Full'}
                                type={'filled'}
                                handleClick={() => handleSubmit('full')}
                                customStyles={'text-xs'} />
                        </>
                    )}
            </div>
        </div>
    )
}

export default AIPicker;
