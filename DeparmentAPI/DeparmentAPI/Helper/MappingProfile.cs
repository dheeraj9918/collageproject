using AutoMapper;
using DeparmentAPI.Model;

namespace DeparmentAPI.Helper
{
    public class MappingProfile:Profile
    {
        public MappingProfile() 
        {
            CreateMap<SignInDto, SignInModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.RollNo.ToString()))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.RollNo.ToString()))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => "Admin"));
            CreateMap<ResultDto, ResultModel>();
        }
    }
}
