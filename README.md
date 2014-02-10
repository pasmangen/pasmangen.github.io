PMG - Password Manager Generator
================================

The easy way to generate your passwords

# The problem

Comunity Managers:

<img src="./icons/comunity-managers.png" width="256" alt="Comunity Managers">

Sys Admins:

![Sys Admins](./icons/sysadmins.png)

All of them have a lot of accounts to manage.

# The simplest solution

Use the same password for all our accounts.

**PROBLEM: If someone gets our master password, could login in all our accounts.**

# The safest solution

Use different passwords for each of our accounts.

**PROBLEM: How to save all those passwords?**

# Save them in a CVS file

It is the easiest way to save all our passwords.

![CVS](./icons/excel-3-512.png)

**PROBLEM: If someone gets our CVS file, could login in all our accounts.**

# Save them in a encrypted database

Now, if someone gets our encrypted database, must also get the password of the database to crack our other passwords.

![Encrypted Database](./icons/data-encryption-512.png)

**PROBLEM: Where to store the encrypted database? In localhost? In the cloud?**

# The ultimate solution: PMG

![PMG - Password Manager Generator](./img/icon-pmg.png)

PMG is a **Password Manager Generator**: 
    - You don't have to save any passwords. They are generated from the account name, the user name, a coordinate of one codes card and a master password. 
    - Now, **you just have to memorize a master password**, and kepp save a semi-random codes card (you can print it and carry in your wallet)

# How PMG works?

![Lock](./icons/padlock.png)

1. Enter the **account name** (eg: Twitter) 
2. Enter the **username** (eg: hackthonlovers) 
3. Enter **one code of a codes card** (always the same for the same account and the same user). 
4. Enter the **master password**.

![Unlock](./icons/padlock-unlock.png)

* After entering the data, PMG **will generate a unique password** for that account, that user, that code of the codes card and that master password. 
* PMG doesn't save any data and **all is generated locally** (using JavaScript in the browser)

# Advantages of PMG

![Advantages 1](./icons/approve-512.png)

* Developed in HTML, CSS and JavaScript, so PMG is **very portable** (future iOS and Android). 
* PMG **doesn't save any data in the cloud**, everything is generated locally. 
* **You only need to remember one master password** and have a codes card.

![Advantages 2](./icons/approve-512-bis.png)

* If someone gets the password of an account, **do not gets the passwords of others accounts**.
* If someone wants to catch all our passwords **needs our master password and our codes card**.