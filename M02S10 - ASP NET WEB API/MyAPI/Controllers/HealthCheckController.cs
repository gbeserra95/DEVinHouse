using Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthCheckController : ControllerBase
    {
        private readonly IHealthCheck _healthCheck;

        public HealthCheckController(IHealthCheck healthCheck)
        {
            _healthCheck = healthCheck;
        }

        [HttpGet]
        public ActionResult<bool> VerifyServiceHealth()
        {
            var healthy = _healthCheck.IsHealthy();
            return Ok(healthy);
        }
    }
}