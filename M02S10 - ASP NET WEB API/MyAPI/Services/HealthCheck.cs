using Interfaces;

namespace Services
{
    public class HealthCheck : IHealthCheck
    {
        public bool IsHealthy()
        {
            return true;
        }
    }
}