using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using AutoMapper;
using PetaPoco;

namespace AspTask_EmployeeDirectory
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("http://localhost:53135",
                                        "http://localhost:4200"
                                        )
                                        .AllowAnyHeader()
                                        .AllowAnyMethod();
                });
            });
            services.AddControllers();
            services.AddSingleton<Contracts.IEmployeeServices, Services.EmployeeServices>();
            services.AddSingleton<Contracts.IDepartmentServices, Services.DepartmentServices>();
            services.AddSingleton<Contracts.IOfficeServices, Services.OfficeServices>();
            services.AddSingleton<Contracts.IJobTitleServices, Services.JobtTitleServices>();
            services.AddAutoMapper(typeof(AutoMappingProfile));
            var connection = new Database(Configuration.GetConnectionString("DatabaseConnection"), "System.Data.SqlClient");
            connection.OpenSharedConnection();
            services.AddSingleton(connection);
        }
        //"System.Data.SqlClient"
        //Configuration.GetConnectionString("DatabaseConnection")

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(MyAllowSpecificOrigins);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


        }
    }
}
