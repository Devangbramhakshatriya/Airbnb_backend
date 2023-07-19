exports.Login = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log('connected to Id ' + connection.threadId);
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return res.status(400).render('login', {
            message: 'please provide  email & password',
            status:'danger'
          })
        }
  
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
          if (!results.length) {
            return res.status(400).render('login', {
              message: 'No user Found With this email',
              status: 'danger'
            })
          } else {
            const passwordMatch = await bcrypt.compare(password, results[0].password);
            if (!passwordMatch) {
              return res.status(401).render('login', {
                message: 'password is Incorrect',
                status: 'warning'
              })
            } else {
              const id = results[0].id;
              console.log('the id is' + id);
  
              const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
              })
              console.log("The token is: " + token);
  
              const cookieOptions = {
                expires: new Date(
                  Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                httpOnly: true
              }
  
              res.cookie('jwt', token, cookieOptions);
              res.status(200).redirect('/');
            }
          }
        })
  
      } catch (err) {
        console.log(err);
      }
    })
  }