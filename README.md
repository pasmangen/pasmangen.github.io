PMG - Password Manager Generator
================================

The easy way to generate your passwords.

<iframe src="http://www.slideshare.net/slideshow/embed_code/31054958" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px 1px 0; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/asanzdiego/pmg-passwordmanagergeneratoren" title="PMG - Password Manager Generator [EN]" target="_blank">PMG - Password Manager Generator [Slides]</a> </div>

[Download v1.1](https://github.com/pasmangen/pasmangen.github.io/archive/pmg-1.1.zip)

# The problem

<table>
    <tr>
        <td>Comunity Managers:</td>
        <td>Sys Admins:</td>
    </tr>
    <tr>
        <td><img src="./icons/comunity-managers.png" width="256" alt="Comunity Managers"></td>
        <td><img src="./icons/sysadmins.png" width="256" alt="Sys Admins"></td>
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

<img src="./icons/excel-3-512.png" width="128" alt="CVS File">

It is the easiest way to save all our passwords.

**PROBLEM: If someone gets our CVS file, could login in all our accounts.**

# Save passwords in a encrypted database

<img src="./icons/data-encryption-512.png" width="128" alt="Encrypted Database">

Now, if someone gets our encrypted database, must also get the password of the database to crack our other passwords.

**PROBLEM: Where to store the encrypted database? In localhost? In the cloud?**

# The ultimate solution: PMG

<img src="./img/icon-pmg-bis.png" width="256" alt="PMG - Password Manager Generator">

PMG is a **Password Manager Generator**: 
* You don't have to save any passwords. They are generated from the account name, the user name, a coordinate of one codes card and a master password. 
* Now, **you just have to memorize a master password**, and kepp save a semi-random codes card (you can print it and carry in your wallet)

# How PMG works?

<img src="./icons/padlock.png" width="96" alt="Lock">

1. Enter the **account name** (eg: Twitter) 
2. Enter the **username** (eg: hackthonlovers) 
3. Enter **one code of a codes card** (always the same for the same account and the same user). 
4. Enter the **master password**.

<img src="./icons/padlock-unlock.png" width="96" alt="Unlock">

* After entering the data, PMG **will generate a unique password** for that account, that user, that code of the codes card and that master password. 
* PMG doesn't save any data and **all is generated locally** (using JavaScript in the browser)

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