﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NexEd_Project.Entities;

#nullable disable

namespace NexEd_Project.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20240213125129_migg2")]
    partial class migg2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("NexEd_Project.Entities.Announcement", b =>
                {
                    b.Property<string>("notificationId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("Announcement ID");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("Notification Time");

                    b.Property<string>("Message")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Message");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Role");

                    b.HasKey("notificationId");

                    b.ToTable("Announcements");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Assign", b =>
                {
                    b.Property<string>("AssignId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Classid")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("Classtime")
                        .HasColumnType("datetime2");

                    b.Property<string>("TeacherId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("AssignId");

                    b.HasIndex("Classid");

                    b.HasIndex("TeacherId");

                    b.ToTable("assigns");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Class", b =>
                {
                    b.Property<string>("ClassId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ClassName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ClassId");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Examination", b =>
                {
                    b.Property<string>("ExamId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("ExamDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ExamName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("ExamName");

                    b.Property<string>("SubjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ExamId");

                    b.HasIndex("ClassId");

                    b.ToTable("Examinations");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Notification", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Result", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ExamId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ExaminationsExamId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Marks")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StudentId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ExaminationsExamId");

                    b.ToTable("mark");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Student", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("varchar");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("NexEd_Project.Entities.StudentAttendance", b =>
                {
                    b.Property<int>("SAttendanceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SAttendanceId"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("Date");

                    b.Property<string>("StudentId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("isStudentPresent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SAttendanceId");

                    b.ToTable("attendances");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Teacher", b =>
                {
                    b.Property<string>("TeacherId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("varchar");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.Property<string>("SubjectTaught")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("varchar");

                    b.HasKey("TeacherId");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("NexEd_Project.Entities.TeacherAttendance", b =>
                {
                    b.Property<int>("TAttendanceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TAttendanceId"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("Date");

                    b.Property<string>("TeacherId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("isTeacherPresent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TAttendanceId");

                    b.ToTable("Tattendances");
                });

            modelBuilder.Entity("NexEd_Project.Entities.User", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mobile")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("NexEd_Project.Models.AuthReponse", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Signups");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Assign", b =>
                {
                    b.HasOne("NexEd_Project.Entities.Class", "Classes")
                        .WithMany()
                        .HasForeignKey("Classid")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("NexEd_Project.Entities.Teacher", "Teachers")
                        .WithMany()
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Classes");

                    b.Navigation("Teachers");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Examination", b =>
                {
                    b.HasOne("NexEd_Project.Entities.Class", "Classes")
                        .WithMany()
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Classes");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Result", b =>
                {
                    b.HasOne("NexEd_Project.Entities.Examination", "Examinations")
                        .WithMany()
                        .HasForeignKey("ExaminationsExamId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Examinations");
                });

            modelBuilder.Entity("NexEd_Project.Entities.Student", b =>
                {
                    b.HasOne("NexEd_Project.Entities.Class", "Classes")
                        .WithMany()
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Classes");
                });
#pragma warning restore 612, 618
        }
    }
}
