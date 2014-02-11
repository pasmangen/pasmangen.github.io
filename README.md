PMG - Password Manager Generator
================================

The easy way to generate your passwords.

<iframe src="http://www.slideshare.net/slideshow/embed_code/31054958" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px 1px 0; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/asanzdiego/pmg-passwordmanagergeneratoren" title="PMG - Password Manager Generator [EN]" target="_blank">PMG - Password Manager Generator [Slides]</a> </div>

[Download v1.1](https://github.com/pasmangen/pasmangen.github.io/archive/pmg-1.1.zip)

# The problem

<table width="100%">
    <tr>
        <td align="center">Comunity Managers:</td>
        <td align="center">Sys Admins:</td>
    </tr>
    <tr>
        <td align="center"><img src="./icons/comunity-managers.png" width="256" alt="Comunity Managers"></td>
        <td align="center"><img src="./icons/sysadmins.png" width="256" alt="Sys Admins"></td>
    </tr>
</table>

All of them have **a lot of accounts to manage**.

# The simplest solution: same passwords

Use the same password for all our accounts.

**PROBLEM: If someone gets our master password, could login in all our accounts.**

# The safest solution: different passwords

Use different passwords for each of our accounts.

**PROBLEM: How to save all those passwords?**

# Save passwords in a CVS file

<table>
    <tr>
        <td><img src="./icons/excel-3-512.png" width="128" alt="CVS File"></td>
        <td>
            <p>It is the easiest way to save all our passwords.</p>
            <p><strong>PROBLEM: If someone gets our CVS file, could login in all our accounts.<strong></p>
        </td>
    </tr>
</table>

# Save passwords in a encrypted database

<table>
    <tr>
        <td><img src="./icons/data-encryption-512.png" width="128" alt="Encrypted Database"></td>
        <td>
            <p>Now, if someone gets our encrypted database, must also get the password of the database to crack our other passwords.</p>
            <p><strong>PROBLEM: Where to store the encrypted database? In localhost? In the cloud?</strong></p>
        </td>
    </tr>
</table>

# The ultimate solution: PMG

<table>
    <tr>
        <td><img src="./img/icon-pmg-bis.png" width="256" alt="PMG - Password Manager Generator"></td>
        <td>
            PMG is a <strong>Password Manager Generator</strong>:
            <ul>
                <li>You don't have to save any passwords. They are generated from the account name, the user name, 
                    a coordinate of one codes card and a master password.</li>
                <li>Now, <strong>you just have to memorize a master password</strong>, and kepp save
                    a semi-random codes card (you can print it and carry in your wallet).</li>
            </ul>
        </td>
    </tr>
</table>

# How PMG works?

<table>
    <tr>
        <td><img src="./icons/padlock.png" width="96" alt="Lock"></td>
        <td>
            <ol>
                <li>Enter the <strong>account name</strong> (eg: Twitter).</li>
                <li>Enter the <strong>username</strong> (eg: hackthonlovers).</li>
                <li>Enter <strong>one code of a codes card</strong> (always the same for the same account and the same user).</li>
                <li>Enter the <strong>master password</strong>.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td><img src="./icons/padlock-unlock.png" width="96" alt="Unlock"></td>
        <td>
            <ul>
                <li>After entering the data, PMG <strong>will generate a unique password</strong> for that account, 
                    that user, that code of the codes card and that master password.</li>
                <li>PMG doesn't save any data and <strong>all is generated locally</strong> (using JavaScript in the browser).</li>
            </ul>
        </td>
    </tr>
</table>

# Advantages of PMG

<table>
    <tr>
        <td><img src="./icons/approve-512.png" width="128" alt="Advantages 1"></td>
        <td>
            <ul>
                <li>Developed in HTML, CSS and JavaScript, so PMG is <strong>very portable</strong> (future iOS and Android).</li>
                <li>PMG <strong>doesn't save any data in the cloud</strong>, everything is generated locally.</li>
                <li><strong>You only need to remember one master password</strong> and have a codes card.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><img src="./icons/approve-512-bis.png" width="128" alt="Advantages 2"></td>
        <td>
            <ul>
                <li>If someone gets the password of an account, <strong>do not gets the passwords of others accounts</strong>.</li>
                <li>If someone wants to catch all our passwords <strong>needs our master password and our codes card</strong>.</li>
            </ul>
        </td>
    </tr>
</table>