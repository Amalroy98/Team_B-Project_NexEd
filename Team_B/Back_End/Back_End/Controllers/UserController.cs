using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using NexEd_Project.Entities;
using NexEd_Project.Models;
using NexEd_Project.Repositories;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly UserRepository userRepository;
        private readonly IConfiguration configuration;
        public UserController(UserRepository userRepository, IConfiguration configuration)
        {
            this.userRepository = userRepository;
            this.configuration = configuration;
        }
        [HttpPost, Route("Register")]
        //  [AllowAnonymous]
        public IActionResult Register(User user)
        {

            userRepository.Add(user);
            return Ok(user);
        }
        [HttpPost, Route("Login")]
        // [AllowAnonymous]
        public IActionResult Validate(LoginUser login)
        {
            try
            {
                User user = userRepository.Validate(login);
                AuthReponse authReponse = new AuthReponse();
                if (user != null)
                {
                    authReponse.UserId = user.UserId;
                    authReponse.Role = user.Role;
                    authReponse.Token = GetToken(user);
                }
                return StatusCode(200, authReponse);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
            }
        }
        private string GetToken(User? user)
        {
            var issuer = configuration["Jwt:Issuer"];
            var audience = configuration["Jwt:Audience"];
            var key = Encoding.UTF8.GetBytes(configuration["Jwt:Key"]);
            //header part
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature
            );
            //payload part
            var subject = new ClaimsIdentity(new[]
            {
                        new Claim(ClaimTypes.Name,user.UserName),
                        new Claim(ClaimTypes.Role, user.Role),
                        new Claim(ClaimTypes.Email,user.Email),
                    });

            var expires = DateTime.UtcNow.AddMinutes(10);
            //signature part
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = subject,
                Expires = expires,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            return jwtToken;
        }

        [HttpPost, Route("Recover")]
        public IActionResult Verify(Recover recover)
        {
            User user = userRepository.Verify(recover);
            return Ok(user);
        }

        [HttpPut,Route("UpdatePassword")]
        public IActionResult ResetPassword(PassUpdate passUpdate)
        {
            try
            {
                var user = userRepository.GetByMail(passUpdate.Email);
                if (user == null)
                {
                    return NotFound("User not found");
                }
                else
                {
                    // Update the user's password
                    user.Password = passUpdate.NewPassword;
                    userRepository.Update(user);

                    return Ok("Updated Successfully");
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
