using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NexEd_Project.Models;

namespace NexEd_Project.Entities
{
    public class MyContext:DbContext
    {
        private readonly IConfiguration configuration;

        public MyContext(IConfiguration configuration)
        {
            this.configuration= configuration;
        }

        public DbSet<Teacher> Teachers { get; set; }    
        public DbSet<Student> Students { get; set; }
        public DbSet<Examination> Examinations { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Result> mark { get; set; }
        //public DbSet<Transcript> transcripts { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<AuthReponse> Signups { get; set; }
        public DbSet<Assign> assigns { get; set; }
        //public DbSet<Schedule> schedules { get; set; }
        public DbSet<StudentAttendance> attendances { get; set; }
        public DbSet<TeacherAttendance> Tattendances { get; set; }
        // public DbSet<Admin> admins { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            foreach (var foreignKey in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                foreignKey.DeleteBehavior = DeleteBehavior.Restrict;
            }
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("MyConnection"));
           // SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["MyDB"].ConnectionString);
            //con.Open();
        }
    }
}
